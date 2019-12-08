import { Request, Response } from 'express';
import { Controller, Get, Patch, Post, Put } from '@overnightjs/core';
import Mealplan from '../schemas/meal-plan.schema';

@Controller('api/mealplans')
export class MealplanController {

  @Get()
  private get(req: Request, res: Response) {
    Mealplan.find().then(mealplans => {
      res.status(200).json(mealplans);
    });
  }

  @Post()
  private Insert(req: Request, res: Response) {
    new Mealplan(req.body).save().then(result => {
      res.status(200).json(result);
    });
  }

  @Put(':id')
  private UpdateRecipe(req: Request, res: Response) {
    Mealplan.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }

  @Patch(':id')
  private PatchRecipe(req: Request, res: Response) {
    Mealplan.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }
}
