"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const ingredient_schema_1 = tslib_1.__importDefault(require("../schemas/ingredient.schema"));
let IngredientController = class IngredientController {
    getAll(req, res) {
        ingredient_schema_1.default.aggregate([
            {
                $lookup: {
                    from: 'ingredientcategories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category'
                }
            },
            {
                $unwind: "$category"
            },
        ]).then(units => {
            res.status(200).json(units);
        });
    }
    insert(req, res) {
        new ingredient_schema_1.default(req.body).save().then(result => {
            res.status(200).json(result);
        });
    }
    update(req, res) {
        ingredient_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
    patch(req, res) {
        ingredient_schema_1.default.findOneAndUpdate({ _id: req.params.id }, req.body).then(result => {
            res.status(200).json(result);
        });
    }
};
tslib_1.__decorate([
    core_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientController.prototype, "getAll", null);
tslib_1.__decorate([
    core_1.Post(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientController.prototype, "insert", null);
tslib_1.__decorate([
    core_1.Put(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientController.prototype, "update", null);
tslib_1.__decorate([
    core_1.Patch(':id'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], IngredientController.prototype, "patch", null);
IngredientController = tslib_1.__decorate([
    core_1.Controller('api/ingredients')
], IngredientController);
exports.IngredientController = IngredientController;
