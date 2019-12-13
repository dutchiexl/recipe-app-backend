"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const user_schema_1 = tslib_1.__importDefault(require("../schemas/user.schema"));
const user_util_1 = require("../utils/user.util");
const jsonwebtoken_1 = require("jsonwebtoken");
let UserController = class UserController {
    login(req, res) {
        const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
        let { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send();
        }
        else {
            user_schema_1.default.findOne({ 'username': username }, function (err, result) {
                if (err) {
                    res.status(401).send();
                }
            }).then(user => {
                if (user) {
                    if (!user_util_1.UserUtil.checkIfUnencryptedPasswordIsValid(password, user.password)) {
                        res.status(401).send();
                        return;
                    }
                    else {
                        const token = jsonwebtoken_1.sign({ userId: user._id, username: user.username }, secret, { expiresIn: process.env.TOKEN_LIFETIME });
                        res.json({
                            'token': token
                        });
                    }
                }
                else {
                    res.status(401).send();
                }
            });
        }
    }
};
tslib_1.__decorate([
    core_1.Post('login'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
UserController = tslib_1.__decorate([
    core_1.Controller('auth')
], UserController);
exports.UserController = UserController;
