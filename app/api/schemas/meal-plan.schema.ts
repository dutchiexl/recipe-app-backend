import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IMealPlan } from '../interfaces/meal-plan.interface';

const MealPlanSchema: Schema = new Schema({
        name: {type: String, required: true},
        recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
        archived: {type: Boolean, default: false},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IMealPlan>('MealPlan', MealPlanSchema);
