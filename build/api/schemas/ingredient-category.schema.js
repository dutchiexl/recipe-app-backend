"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const IngredientCategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
});
exports.default = mongoose.model('IngredientCategory', IngredientCategorySchema);
