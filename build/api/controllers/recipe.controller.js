"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const recipe_schema_1 = tslib_1.__importDefault(require("../schemas/recipe.schema"));
const auth_middleware_1 = require("../middleware/auth.middleware");
let RecipeController = class RecipeController {
    get(req, res) {
        recipe_schema_1.default.find({ user: res.locals.userId }).then(recipes => {
            res.status(200).json(recipes);
        });
    }
    insert(req, res) {
        let recipe = req.body;
        recipe.user = res.locals.userId;
        new recipe_schema_1.default(recipe).save().then(result => {
            res.status(200).json(result);
        });
    }
    insertSharedRecipe(req, res) {
        let recipe = req.body;
        new recipe_schema_1.default(recipe).save().then(result => {
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
        recipe_schema_1.default.findOneAndDelete({ _id: req.params.id, user: res.locals.userId }).then(result => {
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
], RecipeController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "insert", null);
tslib_1.__decorate([
    core_1.Post(),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "insertSharedRecipe", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "update", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "patch", null);
tslib_1.__decorate([
    core_1.Delete(':id'),
    core_1.Middleware([auth_middleware_1.Auth]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], RecipeController.prototype, "delete", null);
RecipeController = tslib_1.__decorate([
    core_1.Controller('api/recipes')
], RecipeController);
exports.RecipeController = RecipeController;
