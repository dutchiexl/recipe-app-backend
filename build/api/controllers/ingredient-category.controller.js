"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const ingredient_category_schema_1 = tslib_1.__importDefault(require("../schemas/ingredient-category.schema"));
let IngredientCategoryController = class IngredientCategoryController {
    get(req, res) {
        ingredient_category_schema_1.default.find().then(categories => {
            res.status(200).json(categories);
        });
    }
    Insert(req, res) {
        new ingredient_category_schema_1.default(req.body).save().then(result => {
            res.status(200).json(result);
        });
    }
    Update(req, res) {
        ingredient_category_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    Patch(req, res) {
        ingredient_category_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientCategoryController.prototype, "get", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientCategoryController.prototype, "Insert", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientCategoryController.prototype, "Update", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientCategoryController.prototype, "Patch", null);
IngredientCategoryController = tslib_1.__decorate([
    core_1.Controller('api/ingredient-categories')
], IngredientCategoryController);
exports.IngredientCategoryController = IngredientCategoryController;
