"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const jsonwebtoken_1 = require("jsonwebtoken");
let UserController = class UserController {
    login(req, res) {
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        const token = jsonwebtoken_1.sign({ userId: 1, username: 'dutchiexl' }, secret, { expiresIn: process.env.TOKEN_LIFETIME });
        //Send the jwt in the response
        res.send(token);
    }
};
tslib_1.__decorate([
    core_1.Get('login'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
UserController = tslib_1.__decorate([
    core_1.Controller('auth')
], UserController);
exports.UserController = UserController;
