import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IRecipe } from '../interfaces/recipe.interface';
import { StepSchema } from './step.schema';
import { ItemSchema } from './item.schema';
import { ShareSchema } from './share.schema';

const RecipeSchema: Schema = new Schema({
        name: {type: String, required: true},
        nameAddition: {type: String},
        description: {type: String, required: true},
        imagePath: {type: String, required: true},
        items: [ItemSchema],
        steps: [StepSchema],
        equipment: [{type: String}],
        source: {type: String},
        share: ShareSchema,
        user: {type: Schema.Types.ObjectId, ref: 'User'},
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IRecipe>('Recipe', RecipeSchema);
