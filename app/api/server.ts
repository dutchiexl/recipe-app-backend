import * as bodyParser from 'body-parser';
import * as controllers from './controllers/index';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

let cors = require('cors');

/**
 * The server.
 *
 * @class Server
 */
class ApiServer extends Server {
  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): ApiServer {
    return new ApiServer();
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

    //configure routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    this.app.use(cors({
      origin: '*'
    }));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    const controllerInstances = [];
    for (const name in controllers) {
      if (controllers.hasOwnProperty(name)) {
        const controller = (controllers as any)[name];
        controllerInstances.push(new controller());
      }
    }
    super.addControllers(controllerInstances);
  }

  public start(port: number): void {
    this.app.get('*', (req, res) => {
      res.send('Server started on port: ' + port);
    });
    this.app.listen(port, () => {
      Logger.Imp('Server started on port: ' + port);
    });
  }
}

export default ApiServer;
