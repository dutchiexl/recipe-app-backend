import { Schema } from 'mongoose';
import { SharedStatusEnum } from '../enums/shared-status.enum';

export const ShareSchema: Schema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            enum: Object.values(SharedStatusEnum),
            default: SharedStatusEnum.PENDING
        },
        recipe: {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    }
);
