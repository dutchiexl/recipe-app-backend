"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const step_schema_1 = require("./step.schema");
const item_schema_1 = require("./item.schema");
const share_schema_1 = require("./share.schema");
const RecipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    nameAddition: { type: String },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
    serves: { type: Number, required: true, default: 2 },
    items: [item_schema_1.ItemSchema],
    steps: [step_schema_1.StepSchema],
    equipment: [{ type: String }],
    categories: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'RecipeCategory' }],
    source: { type: String },
    share: share_schema_1.ShareSchema,
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});
exports.default = mongoose.model('Recipe', RecipeSchema);
