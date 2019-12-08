"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const multer_1 = tslib_1.__importDefault(require("multer"));
let ApiController = class ApiController {
    constructor() {
        this.UPLOAD_PATH = 'public/images';
        this.upload = multer_1.default({ dest: `${this.UPLOAD_PATH}/` });
        this.type = this.upload.single('image');
    }
    getMessage(req, res) {
        logger_1.Logger.Info(req.params.msg);
        res.status(200).json({
            message: req.params.msg,
        });
    }
};
tslib_1.__decorate([
    core_1.Get(':msg'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ApiController.prototype, "getMessage", null);
ApiController = tslib_1.__decorate([
    core_1.Controller('api')
], ApiController);
exports.ApiController = ApiController;
