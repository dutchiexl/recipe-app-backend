import { Request, Response } from 'express';
import {Controller, Get, Middleware} from '@overnightjs/core';
import User from '../schemas/user.schema';
import {Auth} from "../middleware/auth.middleware";

@Controller('api/shared-users')
export class SharedUserController {
    @Get()
    @Middleware([Auth])
    private getAll(req: Request, res: Response) {
        User.find().select(['-password', '-email', '-isAdmin']).then(users => {
            res.status(200).json(users);
        });
    }
}
