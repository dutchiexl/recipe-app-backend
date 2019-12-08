import { Request, Response } from 'express';
import { Controller, Get, Patch, Post, Put } from '@overnightjs/core';
import Ingredient from '../schemas/ingredient.schema';

@Controller('api/ingredients')
export class IngredientController {

  @Get()
  private getAll(req: Request, res: Response) {
    Ingredient.aggregate([
      {
        $lookup:
          {
            from: 'ingredientcategories',
            localField: 'category',
            foreignField: '_id',
            as: 'category'
          }
      },
      {
        $unwind: "$category"
      },
    ]).then(units => {
      res.status(200).json(units);
    });
  }

  @Post()
  private insert(req: Request, res: Response) {
    new Ingredient(req.body).save().then(result => {
      res.status(200).json(result);
    });
  }

  @Put(':id')
  private update(req: Request, res: Response) {
    Ingredient.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }

  @Patch(':id')
  private patch(req: Request, res: Response) {
    Ingredient.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }
}
