import { sign, verify } from 'jsonwebtoken'
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { IJWTPayload } from '../interfaces/jwt-payload.interface';

export const Auth: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    let token = <string>req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        let jwtPayload;

        try {
            jwtPayload = verify(token, secret);
            res.locals.jwtPayload = jwtPayload;
        } catch (error) {
            res.status(401).send();
            return;
        }

        const {userId, username} = <IJWTPayload>jwtPayload;
        const newToken = sign({userId, username}, secret, {
            expiresIn: process.env.TOKEN_LIFETIME
        });
        res.setHeader('token', newToken);

        next();
    } else {
        res.status(401).send();
        return;
    }
};
