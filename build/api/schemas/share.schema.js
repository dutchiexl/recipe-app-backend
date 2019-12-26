"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shared_status_enum_1 = require("../enums/shared-status.enum");
exports.ShareSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: Object.values(shared_status_enum_1.SharedStatusEnum),
        default: shared_status_enum_1.SharedStatusEnum.PENDING
    },
    recipe: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Recipe' }
});
