import { Request, RequestHandler, Response } from 'express';
import { Controller, Middleware, Post } from '@overnightjs/core';
import fs from 'fs';
import multer from 'multer';
import { S3 } from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';

const UPLOAD_PATH = 'public/images/';
const upload = multer({dest: `${UPLOAD_PATH}/`});
const type: RequestHandler = upload.single('image');

@Controller('api/upload')
export class UploadController {

    @Post('')
    @Middleware([type])
    private upload(req: Request, res: Response) {
        const bucket = new S3({
            accessKeyId: process.env.AWS_ID,
            secretAccessKey: process.env.AWS_SECRET,
        });
        let tmp_path = req.file.path;
        const fileContent = fs.readFileSync(tmp_path);

        const bucketName: string = process.env.AWS_BUCKET ? process.env.AWS_BUCKET : '';
        const params: PutObjectRequest = {
            Bucket: bucketName,
            Key: UPLOAD_PATH + req.file.originalname,
            Body: fileContent,
            ACL: 'public-read'
        };

        bucket.upload(params, function (err: any, data: any) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
    }
}
