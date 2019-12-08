"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bodyParser = tslib_1.__importStar(require("body-parser"));
const express_1 = tslib_1.__importDefault(require("express"));
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
/**
 * The server.
 *
 * @class Server
 */
class AssetServer extends core_1.Server {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        super(true);
        this.UPLOAD_PATH = 'public';
        //configure application
        this.config();
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    static bootstrap() {
        return new AssetServer();
    }
    /**
     * Configure application
     *
     * @class Server
     * @method config
     * @return void
     */
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
    start(port) {
        this.app.use(express_1.default.static(this.UPLOAD_PATH));
        this.app.listen(port, () => {
            logger_1.Logger.Imp('Server started on port: ' + port);
        });
    }
}
exports.default = AssetServer;
