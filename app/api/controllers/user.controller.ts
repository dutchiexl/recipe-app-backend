import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import { sign } from 'jsonwebtoken';

@Controller('auth')
export class UserController {

    @Get('login')
    private login(req: Request, res: Response) {
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        const token = sign(
            {userId: 1, username: 'dutchiexl'},
            secret,
            {expiresIn: process.env.TOKEN_LIFETIME}
        );

        //Send the jwt in the response
        res.send(token);
    }
}
