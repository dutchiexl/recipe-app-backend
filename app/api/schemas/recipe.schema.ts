import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IRecipe } from '../interfaces/recipe.interface';
import { StepSchema } from './step.schema';
import { ItemSchema } from './item.schema';

const RecipeSchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
    nameAddition: {type: String, required: true},
    description: {type: String, required: true},
    imagePath: {type: String, required: true},
    items: [ItemSchema],
    steps: [StepSchema],
    equipment: [{type: String}],
    source: {type: String}
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);
