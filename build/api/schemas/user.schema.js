"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = require("jsonwebtoken");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
//simple schema
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean },
});
//custom method to generate authToken
UserSchema.methods.generateAuthToken = function () {
    const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
    const token = jsonwebtoken_1.sign({ _id: this._id, isAdmin: this.isAdmin }, secret);
    return token;
};
exports.default = mongoose_1.default.model('User', UserSchema);
