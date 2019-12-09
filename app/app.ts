import ApiServer from './api/server';
import AssetServer from './assets/server';
import { DatabaseService } from './api/services/database.service';
import DotEnv from 'dotenv'

DotEnv.config();
new DatabaseService();
AssetServer.bootstrap().start(3334);
ApiServer.bootstrap().start(Number(process.env.PORT) || 3333);
