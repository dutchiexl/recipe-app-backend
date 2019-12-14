import { Types } from 'mongoose';
import { IUser } from './user.interface';
import { SharedStatusEnum } from '../enums/shared-status.enum';

export interface IShare extends Types.Subdocument {
    user: IUser;
    status: SharedStatusEnum;
}
