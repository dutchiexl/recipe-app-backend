import { connect } from 'mongoose';
import { Logger } from '@overnightjs/logger';

export class DatabaseService {
  constructor() {
    if (process.env.MONGO_URI) {
      connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(result => {
        Logger.Info('MONGODB CONNECTED');
      });
    } else {
      Logger.Info('MONGO URI IS NOT DEFINED');
    }
  }
}
