import { Schema } from 'mongoose';

export const StepSchema: Schema = new Schema({
    name: {type: String, required: true},
    text: {type: String, required: true},
    imagePath: {type: String, required: true},
  }
);
