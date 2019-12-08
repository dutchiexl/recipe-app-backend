import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IIngredient } from '../interfaces/ingredient.interface';

const IngredientSchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
    category: {type: Schema.Types.ObjectId, ref: 'IngredientCategory'},
    synonyms: [{type: String, required: true}]
  }
);

export default mongoose.model<IIngredient>('Ingredient', IngredientSchema);
