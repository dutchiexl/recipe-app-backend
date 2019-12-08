import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { IRecipe } from '../interfaces/recipe.interface';
import { IMealPlan } from '../interfaces/meal-plan.interface';

const MealPlanSchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
    recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}]
  },
  {
    timestamps: true
  }
);

export default mongoose.model<IMealPlan>('MealPlan', MealPlanSchema);
