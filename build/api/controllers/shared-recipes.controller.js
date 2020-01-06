"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const recipe_schema_1 = tslib_1.__importDefault(require("../schemas/recipe.schema"));
const auth_middleware_1 = require("../middleware/auth.middleware");
const shared_status_enum_1 = require("../enums/shared-status.enum");
const mongoose_1 = require("mongoose");
const user_schema_1 = tslib_1.__importDefault(require("../schemas/user.schema"));
let SharedRecipesController = class SharedRecipesController {
    get(req, res) {
        recipe_schema_1.default.find({ "share.user": mongoose_1.Types.ObjectId(res.locals.userId) })
            .then(recipes => {
            return res.status(200).json(recipes);
        });
    }
    insert(req, res) {
        let data = req.body;
        recipe_schema_1.default.findOne({ _id: data.recipeId }).then(recipe => {
            if (recipe) {
                recipe._id = mongoose_1.Types.ObjectId();
                recipe.user = new user_schema_1.default({ _id: mongoose_1.Types.ObjectId(data.userId) });
                recipe.isNew = true;
                recipe.set({
                    share: {
                        user: new user_schema_1.default({ _id: mongoose_1.Types.ObjectId(res.locals.userId) }),
                        status: shared_status_enum_1.SharedStatusEnum.PENDING,
                        recipe: data.recipeId
                    }
                });
                recipe.save().then(result => {
                    res.status(200).json(result);
                });
            }
            else {
                res.status(500).json();
            }
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SharedRecipesController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SharedRecipesController.prototype, "insert", null);
SharedRecipesController = tslib_1.__decorate([
    core_1.Controller('api/sharedrecipes')
], SharedRecipesController);
exports.SharedRecipesController = SharedRecipesController;
