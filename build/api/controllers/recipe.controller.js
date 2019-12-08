"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const recipe_schema_1 = tslib_1.__importDefault(require("../schemas/recipe.schema"));
const logger_1 = require("@overnightjs/logger");
let RecipeController = class RecipeController {
    getRecipes(req, res) {
        recipe_schema_1.default.find().then(recipes => {
            res.status(200).json(recipes);
        });
    }
    InsertRecipe(req, res) {
        new recipe_schema_1.default(req.body).save().then(result => {
            res.status(200).json(result);
        });
    }
    UpdateRecipe(req, res) {
        recipe_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    PatchRecipe(req, res) {
        logger_1.Logger.Info(req.body);
        recipe_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "getRecipes", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "InsertRecipe", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "UpdateRecipe", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "PatchRecipe", null);
RecipeController = tslib_1.__decorate([
    core_1.Controller('api/recipes')
], RecipeController);
exports.RecipeController = RecipeController;
