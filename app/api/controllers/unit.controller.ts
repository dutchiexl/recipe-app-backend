import { Request, Response } from 'express';
import { Controller, Get, Patch, Post, Put } from '@overnightjs/core';
import Recipe from '../schemas/recipe.schema';
import Unit from '../schemas/unit.schema';

@Controller('api/units')
export class UnitController {

  @Get()
  private getAll(req: Request, res: Response) {
    Unit.find().then(units => {
      res.status(200).json(units);
    });
  }

  @Post()
  private insert(req: Request, res: Response) {
    new Unit(req.body).save().then(result => {
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
}
