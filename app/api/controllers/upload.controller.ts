import { Request, RequestHandler, Response } from 'express';
import { Controller, Middleware, Post } from '@overnightjs/core';
import fs from 'fs';
import multer from 'multer';
import { Logger } from '@overnightjs/logger';

const UPLOAD_PATH = 'public/images';
const upload = multer({dest: `${UPLOAD_PATH}/`});
const type: RequestHandler = upload.single('image');

@Controller('api/upload')
export class UploadController {

  @Post('')
  @Middleware([type])
  private postMessage(req: Request, res: Response) {
    Logger.Imp('posting image');
    let tmp_path = req.file.path;
    let target_path = UPLOAD_PATH + '/' + req.file.originalname;

    /** A better way to copy the uploaded file. **/
    let src = fs.createReadStream(tmp_path);
    let dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function () {
      fs.unlink(tmp_path, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
      });

      res.json({
        'fileName': req.file.originalname
      });
    });
    src.on('error', function (err) { res.json({'error': err}); });
  }
}
