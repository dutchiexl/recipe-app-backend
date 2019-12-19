import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import RecipeCategory from '../schemas/recipe-category.schema';

@Controller('api/recipe-categories')
export class IngredientCategoriesController {

    @Get()
    private get(req: Request, res: Response) {
        RecipeCategory.find().then(categories => {
            res.status(200).json(categories);
        });
    }
}
