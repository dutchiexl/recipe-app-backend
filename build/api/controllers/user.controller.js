"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const user_schema_1 = tslib_1.__importDefault(require("../schemas/user.schema"));
const auth_middleware_1 = require("../middleware/auth.middleware");
let UserController = class UserController {
    getAll(req, res) {
        user_schema_1.default.find().select(['-password']).then(users => {
            res.status(200).json(users);
        });
    }
};
tslib_1.__decorate([
    core_1.Get('shared'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
UserController = tslib_1.__decorate([
    core_1.Controller('api/users')
], UserController);
exports.UserController = UserController;
