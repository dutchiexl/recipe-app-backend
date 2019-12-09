"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const server_1 = tslib_1.__importDefault(require("./api/server"));
const database_service_1 = require("./api/services/database.service");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
new database_service_1.DatabaseService();
server_1.default.bootstrap().start(Number(process.env.PORT) || 3333);
