import { sign } from 'jsonwebtoken'
import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

//simple schema
const UserSchema: Schema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean},
});


//custom method to generate authToken
UserSchema.methods.generateAuthToken = function () {
    const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
    const token = sign({_id: this._id, isAdmin: this.isAdmin}, secret);
    return token;
};

export default mongoose.model<IUser>('User', UserSchema);
