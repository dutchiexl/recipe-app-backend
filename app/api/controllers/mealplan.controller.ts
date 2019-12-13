import { Request, Response } from 'express';
import { Controller, Get, Middleware, Patch, Post, Put } from '@overnightjs/core';
import Mealplan from '../schemas/meal-plan.schema';
import { Auth } from '../middleware/auth.middleware';

@Controller('api/mealplans')
export class MealplanController {

  @Get()
  @Middleware([Auth])
  private get(req: Request, res: Response) {
    Mealplan.find({user: res.locals.userId}).then(mealplans => {
      res.status(200).json(mealplans);
    });
  }

  @Post()
  @Middleware([Auth])
  private Insert(req: Request, res: Response) {
    let mealplan = req.body;
    mealplan.user = res.locals.userId;
    new Mealplan(mealplan).save().then(result => {
      res.status(200).json(result);
    });
  }

  @Put(':id')
  @Middleware([Auth])
  private UpdateRecipe(req: Request, res: Response) {
    Mealplan.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }

  @Patch(':id')
  @Middleware([Auth])
  private PatchRecipe(req: Request, res: Response) {
    Mealplan.findOneAndUpdate({_id: req.params.id}, req.body).then(result => {
      res.status(200).json(result);
    });
  }
}
