"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const step_schema_1 = require("./step.schema");
const item_schema_1 = require("./item.schema");
const RecipeSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    nameAddition: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
    items: [item_schema_1.ItemSchema],
    steps: [step_schema_1.StepSchema],
    equipment: [{ type: String }],
    source: { type: String }
}, {
    timestamps: true
});
exports.default = mongoose.model('Recipe', RecipeSchema);
