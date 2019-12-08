"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const logger_1 = require("@overnightjs/logger");
class DatabaseService {
    constructor() {
        if (process.env.MONGO_URI) {
            mongoose_1.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(result => {
                logger_1.Logger.Info('MONGODB CONNECTED');
            });
        }
        else {
            logger_1.Logger.Info('MONGO URI IS NOT DEFINED');
        }
    }
}
exports.DatabaseService = DatabaseService;
