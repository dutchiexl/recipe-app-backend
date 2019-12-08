import { Document } from 'mongoose';
import { IRecipe } from './recipe.interface';

export interface IMealPlan extends Document {
  name: string;
  recipes: IRecipe[];
}
