"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const recipe_schema_1 = tslib_1.__importDefault(require("../schemas/recipe.schema"));
let RecipeController = class RecipeController {
    get(req, res) {
        recipe_schema_1.default.find().then(recipes => {
            res.status(200).json(recipes);
        });
    }
    insert(req, res) {
        new recipe_schema_1.default(req.body).save().then(result => {
            res.status(200).json(result);
        });
    }
    update(req, res) {
        recipe_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    patch(req, res) {
        recipe_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    delete(req, res) {
        recipe_schema_1.default.findByIdAndDelete({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "insert", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "update", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "patch", null);
tslib_1.__decorate([
    core_1.Delete(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "delete", null);
RecipeController = tslib_1.__decorate([
    core_1.Controller('api/recipes')
], RecipeController);
exports.RecipeController = RecipeController;
