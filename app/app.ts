import ApiServer from './api/server';
import { DatabaseService } from './api/services/database.service';
import DotEnv from 'dotenv'

DotEnv.config();
new DatabaseService();
ApiServer.bootstrap().start(Number(process.env.PORT) || 3333);
