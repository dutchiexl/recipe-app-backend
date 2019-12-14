import { Document } from 'mongoose';

export interface IRecipeCategory extends Document {
  name: string,
}
