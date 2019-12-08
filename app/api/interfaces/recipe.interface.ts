import { Document, Schema } from 'mongoose';
import { IIngredient } from './ingredient.interface';

export interface IRecipe extends Document {
  name: string;
  nameAddition: string;
  description: string;
  imagePath: string,
  ingredients: IIngredient[],
  steps: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
  nutrients: string[],
  equipment: string[],
  source: string
}
