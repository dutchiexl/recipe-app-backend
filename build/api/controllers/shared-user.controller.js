"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const user_schema_1 = tslib_1.__importDefault(require("../schemas/user.schema"));
const auth_middleware_1 = require("../middleware/auth.middleware");
let SharedUserController = class SharedUserController {
    getAll(req, res) {
        user_schema_1.default.find().select(['-password', '-email', '-isAdmin']).then(users => {
            res.status(200).json(users);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SharedUserController.prototype, "getAll", null);
SharedUserController = tslib_1.__decorate([
    core_1.Controller('api/shared-users')
], SharedUserController);
exports.SharedUserController = SharedUserController;
