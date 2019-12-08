"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const meal_plan_schema_1 = tslib_1.__importDefault(require("../schemas/meal-plan.schema"));
let MealplanController = class MealplanController {
    get(req, res) {
        meal_plan_schema_1.default.find().then(mealplans => {
            res.status(200).json(mealplans);
        });
    }
    Insert(req, res) {
        new meal_plan_schema_1.default(req.body).save().then(result => {
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
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "Insert", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "UpdateRecipe", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], MealplanController.prototype, "PatchRecipe", null);
MealplanController = tslib_1.__decorate([
    core_1.Controller('api/mealplans')
], MealplanController);
exports.MealplanController = MealplanController;
