import { Document } from 'mongoose';
import { IUnit } from './unit.interface';
import { IIngredient } from './ingredient.interface';

export interface IItem extends Document {
  amount: number,
  unit: IUnit,
  ingredient: IIngredient
}
