"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
exports.Auth = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        let jwtPayload;
        try {
            jwtPayload = jsonwebtoken_1.verify(token, secret);
            res.locals.jwtPayload = jwtPayload;
        }
        catch (error) {
            res.status(401).send();
            return;
        }
        const { userId, username } = jwtPayload;
        const newToken = jsonwebtoken_1.sign({ userId, username }, secret, {
            expiresIn: process.env.TOKEN_LIFETIME
        });
        res.locals.userId = userId;
        res.setHeader('token', newToken);
        next();
    }
    else {
        res.status(401).send();
        return;
    }
};
