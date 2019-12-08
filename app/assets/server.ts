import * as bodyParser from 'body-parser';
import express from 'express';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

/**
 * The server.
 *
 * @class Server
 */
class AssetServer extends Server {

  UPLOAD_PATH = 'public';

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): AssetServer {
    return new AssetServer();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    super(true);

    //configure application
    this.config();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

  }

  public start(port: number): void {
    this.app.use(express.static(this.UPLOAD_PATH));
    this.app.listen(port, () => {
      Logger.Imp('Server started on port: ' + port);
    });
  }
}

export default AssetServer;
