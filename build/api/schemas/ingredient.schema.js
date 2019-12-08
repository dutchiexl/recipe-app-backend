"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = tslib_1.__importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const IngredientSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'IngredientCategory' },
    synonyms: [{ type: String, required: true }]
});
exports.default = mongoose.model('Ingredient', IngredientSchema);
