"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ItemSchema = new mongoose_1.Schema({
    amount: { type: Number, required: true },
    unit: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Unit' },
    ingredient: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Ingredient' }
});
