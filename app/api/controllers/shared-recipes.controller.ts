import { Request, Response } from 'express';
import { Controller, Middleware, Post } from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import { Auth } from '../middleware/auth.middleware';
import { SharedStatusEnum } from '../enums/shared-status.enum';
import { Types } from 'mongoose';
import { Logger } from '@overnightjs/logger';
import User from '../schemas/user.schema'

@Controller('api/sharedrecipes')
export class SharedRecipesController {
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
                                user: Types.ObjectId(res.locals.userId),
                                status: SharedStatusEnum.PENDING
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
