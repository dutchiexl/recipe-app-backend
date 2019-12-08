import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import { IUnit } from '../interfaces/unit.interface';

const UnitSchema: Schema = new Schema({
    name: {type: String, required: true, unique: true},
    metric: {type: String, required: true},
    isParent: {type: Boolean, required: true},
    parenUnit: {type: Schema.Types.ObjectId, ref: 'Unit'},
    parenRatio: {type: Number},
    synonyms: {type: [String]}
  }
);

export default mongoose.model<IUnit>('Unit', UnitSchema);
