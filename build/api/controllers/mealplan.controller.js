"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const meal_plan_schema_1 = tslib_1.__importDefault(require("../schemas/meal-plan.schema"));
const auth_middleware_1 = require("../middleware/auth.middleware");
let MealplanController = class MealplanController {
    get(req, res) {
        meal_plan_schema_1.default.find({ user: res.locals.userId }).then(mealplans => {
            res.status(200).json(mealplans);
        });
    }
    Insert(req, res) {
        let mealplan = req.body;
        mealplan.user = res.locals.userId;
        new meal_plan_schema_1.default(mealplan).save().then(result => {
            res.status(200).json(result);
        });
    }
    UpdateRecipe(req, res) {
        meal_plan_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    PatchRecipe(req, res) {
        meal_plan_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "Insert", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "UpdateRecipe", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "PatchRecipe", null);
MealplanController = tslib_1.__decorate([
    core_1.Controller('api/mealplans')
], MealplanController);
exports.MealplanController = MealplanController;
