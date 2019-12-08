import { Request, Response } from 'express';
import { Controller, Get, Patch, Post, Put } from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import { Logger } from '@overnightjs/logger';

@Controller('api/recipes')
export class RecipeController {

  @Get()
  private getRecipes(req: Request, res: Response) {
    Recipe.find().then(recipes => {
      res.status(200).json(recipes);
    });
  }

  @Post()
  private InsertRecipe(req: Request, res: Response) {
    new Recipe(req.body).save().then(result => {
      res.status(200).json(result);
    });
  }

  @Put(':id')
  private UpdateRecipe(req: Request, res: Response) {
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }

  @Patch(':id')
  private PatchRecipe(req: Request, res: Response) {
    Logger.Info(req.body);
    Recipe.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }
}
