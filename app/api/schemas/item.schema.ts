import { Schema } from 'mongoose';

export const ItemSchema: Schema = new Schema({
    amount: {type: Number, required: true},
    unit: {type: Schema.Types.ObjectId, ref: 'Unit'},
    ingredient: {type: Schema.Types.ObjectId, ref: 'Ingredient'}
  }
);
