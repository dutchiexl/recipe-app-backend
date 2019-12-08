import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IIngredientCategory } from '../interfaces/ingredient-category.interface';

const IngredientCategorySchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
  }
);

export default mongoose.model<IIngredientCategory>('IngredientCategory', IngredientCategorySchema);
