"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const mongoose = tslib_1.__importStar(require("mongoose"));
const MealPlanSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    recipes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Recipe' }]
}, {
    timestamps: true
});
exports.default = mongoose.model('MealPlan', MealPlanSchema);
