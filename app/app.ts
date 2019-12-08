import ApiServer from './api/server';
import AssetServer from './assets/server';
import { DatabaseService } from './api/services/database.service';
import DotEnv from 'dotenv'

DotEnv.config();
new DatabaseService();
ApiServer.bootstrap().start(3333);
AssetServer.bootstrap().start(3334);
