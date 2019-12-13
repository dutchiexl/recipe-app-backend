import { sign } from 'jsonwebtoken'
import mongoose, { Schema } from 'mongoose';
import JoiObject from 'joi'

//simple schema
const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    //give different access rights if admin or not
    isAdmin: Boolean
});


//custom method to generate authToken
UserSchema.methods.generateAuthToken = function () {
    const secret = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : '';
    const token = sign({_id: this._id, isAdmin: this.isAdmin}, secret);
    return token;
}

const User = mongoose.model('User', UserSchema);

//function to validate user
function validateUser(user: any) {
    const schema = {
        name: JoiObject.string().min(3).max(50).required(),
        email: JoiObject.string().min(5).max(255).required().email(),
        password: JoiObject.string().min(3).max(255).required()
    };

    return JoiObject.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
