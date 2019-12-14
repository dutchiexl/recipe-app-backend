import { Request, Response } from 'express';
import { Controller, Delete, Get, Middleware, Patch, Post, Put } from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import { Auth } from '../middleware/auth.middleware';

@Controller('api/recipes')
export class RecipeController {

    @Get()
    @Middleware([Auth])
    private get(req: Request, res: Response) {
        Recipe.find({user: res.locals.userId}).then(recipes => {
            res.status(200).json(recipes);
        });
    }

    @Post()
    @Middleware([Auth])
    private insert(req: Request, res: Response) {
        let recipe = req.body;
        recipe.user = res.locals.userId;
        new Recipe(recipe).save().then(result => {
            res.status(200).json(result);
        });
    }

    @Post()
    @Middleware([Auth])
    private insertSharedRecipe(req: Request, res: Response) {
        let recipe = req.body;
        new Recipe(recipe).save().then(result => {
            res.status(200).json(result);
        });
    }

    @Put(':id')
    @Middleware([Auth])
    private update(req: Request, res: Response) {
        Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
            res.status(200).json(result);
        });
    }

    @Patch(':id')
    @Middleware([Auth])
    private patch(req: Request, res: Response) {
        Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
            res.status(200).json(result);
        });
    }

    @Delete(':id')
    @Middleware([Auth])
    private delete(req: Request, res: Response) {
        Recipe.findOneAndDelete({_id: req.params.id, user: res.locals.userId}).then(result => {
            res.status(200).json(result);
        });
    }
}
