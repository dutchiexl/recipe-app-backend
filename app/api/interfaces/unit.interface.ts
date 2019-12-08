import { Document } from 'mongoose';

export interface IUnit extends Document {
  name: string;
  metric: string;
  isParent: boolean;
  synonyms: string[];
}
