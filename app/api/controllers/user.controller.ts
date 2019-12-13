import { Request, Response } from 'express';
import { Controller, Post } from '@overnightjs/core';
import User from '../schemas/user.schema';
import { UserUtil } from '../utils/user.util';
import { sign } from 'jsonwebtoken';

@Controller('auth')
export class UserController {

    @Post('login')
    private login(req: Request, res: Response) {
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        let {username, password} = req.body;
        if (!(username && password)) {
            res.status(400).send();
        } else {
            User.findOne({'username': username}, function (err, result) {
                if (err) {
                    res.status(401).send();
                }
            }).then(user => {
                if (user) {
                    if (!UserUtil.checkIfUnencryptedPasswordIsValid(password, user.password)) {
                        res.status(401).send();
                        return;
                    } else {
                        const token = sign(
                            {userId: user._id, username: user.username},
                            secret,
                            {expiresIn: process.env.TOKEN_LIFETIME}
                        );
                        res.json({
                            'token': token
                        });
                    }
                } else {
                    res.status(401).send();
                }
            });

        }
    }
}
