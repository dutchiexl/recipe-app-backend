"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.StepSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    imagePath: { type: String, required: true },
});
