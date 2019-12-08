import { Document } from 'mongoose';
import { IIngredientCategory } from './ingredient-category.interface';

export interface IIngredient extends Document {
  name: string,
  category: IIngredientCategory,
}
