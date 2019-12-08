"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bodyParser = tslib_1.__importStar(require("body-parser"));
const controllers = tslib_1.__importStar(require("./controllers/index"));
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
let cors = require('cors');
/**
 * The server.
 *
 * @class Server
 */
class ApiServer extends core_1.Server {
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    static bootstrap() {
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
    config() {
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
    routes() {
        const controllerInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = controllers[name];
                controllerInstances.push(new controller());
            }
        }
        super.addControllers(controllerInstances);
    }
    start(port) {
        this.app.get('*', (req, res) => {
            res.send('Server started on port: ' + port);
        });
        this.app.listen(port, () => {
            logger_1.Logger.Imp('Server started on port: ' + port);
        });
    }
}
exports.default = ApiServer;
