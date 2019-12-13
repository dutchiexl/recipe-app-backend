"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
class UserUtil {
    static hashPassword(password) {
        return bcrypt_1.hashSync(password, 12);
    }
    static checkIfUnencryptedPasswordIsValid(plainPassword, hash) {
        return bcrypt_1.compareSync(plainPassword, hash);
    }
}
exports.UserUtil = UserUtil;
