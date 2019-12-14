import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IRecipeCategory } from '../interfaces/recipy-category.interface';

const RecipeCategorySchema: Schema = new Schema({
        name: {type: String, required: true, unique: true},
    }
);

export default mongoose.model<IRecipeCategory>('RecipeCategory', RecipeCategorySchema);
