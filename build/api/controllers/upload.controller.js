"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const fs_1 = tslib_1.__importDefault(require("fs"));
const multer_1 = tslib_1.__importDefault(require("multer"));
const aws_sdk_1 = require("aws-sdk");
const UPLOAD_PATH = 'public/images/';
const upload = multer_1.default({ dest: `${UPLOAD_PATH}/` });
const type = upload.single('image');
let UploadController = class UploadController {
    upload(req, res) {
        const bucket = new aws_sdk_1.S3({
            accessKeyId: process.env.AWS_ID,
            secretAccessKey: process.env.AWS_SECRET,
        });
        let tmp_path = req.file.path;
        const fileContent = fs_1.default.readFileSync(tmp_path);
        const bucketName = process.env.AWS_BUCKET ? process.env.AWS_BUCKET : '';
        const params = {
            Bucket: bucketName,
            Key: UPLOAD_PATH + req.file.originalname,
            Body: fileContent,
            ACL: 'public-read'
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    }
};
tslib_1.__decorate([
    core_1.Post(''),
    core_1.Middleware([type]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UploadController.prototype, "upload", null);
UploadController = tslib_1.__decorate([
    core_1.Controller('api/upload')
], UploadController);
exports.UploadController = UploadController;
