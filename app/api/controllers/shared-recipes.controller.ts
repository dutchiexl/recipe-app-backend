import { Request, Response } from 'express';
import {Controller, Get, Middleware, Post} from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import { Auth } from '../middleware/auth.middleware';
import { SharedStatusEnum } from '../enums/shared-status.enum';
import { Types } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import User from '../schemas/user.schema'

@Controller('api/sharedrecipes')
export class SharedRecipesController {

    @Get()
    @Middleware([Auth])
    private get(req: Request, res: Response) {
        Recipe.find({ "share.user": Types.ObjectId(res.locals.userId)})
            .select('share.recipe -_id')
            .then(recipes => {
                return res.status(200).json(recipes);
            });
    }

    @Post()
    @Middleware([Auth])
    private insert(req: Request, res: Response) {
        let data = req.body;
        Recipe.findOne(
            {_id: data.recipeId}
        ).then(recipe => {
            if (recipe) {
                recipe._id = Types.ObjectId();
                recipe.user = new User({_id: Types.ObjectId(data.userId)});
                recipe.isNew = true;
                recipe.set({
                        share:
                            {
                                user: new User({_id: Types.ObjectId(res.locals.userId)}),
                                status: SharedStatusEnum.PENDING,
                                recipe: data.recipeId
                            }
                    }
                );
                recipe.save().then(result => {
                    res.status(200).json(result);
                });
            } else {
                res.status(500).json();
            }
        });
    }
}
