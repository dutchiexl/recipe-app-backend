import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import multer from 'multer';

@Controller('api')
export class ApiController {

  UPLOAD_PATH = 'public/images';
  upload = multer({dest: `${this.UPLOAD_PATH}/`});
  type = this.upload.single('image');

  @Get(':msg')
  private getMessage(req: Request, res: Response) {
    Logger.Info(req.params.msg);
    res.status(200).json({
      message: req.params.msg,
    });
  }
}
