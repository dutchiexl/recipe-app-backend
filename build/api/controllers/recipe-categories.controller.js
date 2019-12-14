"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const recipe_category_schema_1 = tslib_1.__importDefault(require("../schemas/recipe-category.schema"));
let IngredientCategoriesController = class IngredientCategoriesController {
    get(req, res) {
        recipe_category_schema_1.default.find().then(categories => {
            res.status(200).json(categories);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientCategoriesController.prototype, "get", null);
IngredientCategoriesController = tslib_1.__decorate([
    core_1.Controller('api/recipe-categories')
], IngredientCategoriesController);
exports.IngredientCategoriesController = IngredientCategoriesController;
