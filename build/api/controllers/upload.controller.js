"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const fs_1 = tslib_1.__importDefault(require("fs"));
const multer_1 = tslib_1.__importDefault(require("multer"));
const logger_1 = require("@overnightjs/logger");
const UPLOAD_PATH = 'public/images';
const upload = multer_1.default({ dest: `${UPLOAD_PATH}/` });
const type = upload.single('image');
let UploadController = class UploadController {
    postMessage(req, res) {
        logger_1.Logger.Imp('posting image');
        let tmp_path = req.file.path;
        let target_path = UPLOAD_PATH + '/' + req.file.originalname;
        /** A better way to copy the uploaded file. **/
        let src = fs_1.default.createReadStream(tmp_path);
        let dest = fs_1.default.createWriteStream(target_path);
        src.pipe(dest);
        src.on('end', function () {
            fs_1.default.unlink(tmp_path, function (err) {
                if (err)
                    throw err;
                // if no error, file has been deleted successfully
                console.log('File deleted!');
            });
            res.json({
                'fileName': req.file.originalname
            });
        });
        src.on('error', function (err) { res.json({ 'error': err }); });
    }
};
tslib_1.__decorate([
    core_1.Post(''),
    core_1.Middleware([type]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UploadController.prototype, "postMessage", null);
UploadController = tslib_1.__decorate([
    core_1.Controller('api/upload')
], UploadController);
exports.UploadController = UploadController;
