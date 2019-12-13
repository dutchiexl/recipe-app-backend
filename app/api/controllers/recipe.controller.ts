import { Request, Response } from 'express';
import { Controller, Delete, Get, Middleware, Patch, Post, Put } from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import { Auth } from '../middleware/auth.middleware';

@Controller('api/recipes')
export class RecipeController {

    @Get()
    @Middleware([Auth])
    private get(req: Request, res: Response) {
        Recipe.find().then(recipes => {
            res.status(200).json(recipes);
        });
    }

    @Post()
    private insert(req: Request, res: Response) {
        new Recipe(req.body).save().then(result => {
            res.status(200).json(result);
        });
    }

    @Put(':id')
    private update(req: Request, res: Response) {
        Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
            res.status(200).json(result);
        });
    }

    @Patch(':id')
    private patch(req: Request, res: Response) {
        Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
            res.status(200).json(result);
        });
    }

    @Delete(':id')
    private delete(req: Request, res: Response) {
        Recipe.findByIdAndDelete({_id: req.params.id}, req.body).then(result => {
            res.status(200).json(result);
        });
    }
}
