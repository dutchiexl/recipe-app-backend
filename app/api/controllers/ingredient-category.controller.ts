import { Request, Response } from 'express';
import { Controller, Get, Patch, Post, Put } from '@overnightjs/core';
import IngredientCategory from '../schemas/ingredient-category.schema';

@Controller('api/ingredient-categories')
export class IngredientCategoryController {

  @Get()
  private get(req: Request, res: Response) {
    IngredientCategory.find().then(categories => {
      res.status(200).json(categories);
    });
  }

  @Post()
  private Insert(req: Request, res: Response) {
    new IngredientCategory(req.body).save().then(result => {
      res.status(200).json(result);
    });
  }

  @Put(':id')
  private Update(req: Request, res: Response) {
    IngredientCategory.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }

  @Patch(':id')
  private Patch(req: Request, res: Response) {
    IngredientCategory.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }
}
