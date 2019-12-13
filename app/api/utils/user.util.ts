import { compareSync, hashSync } from 'bcrypt';

export class UserUtil {
    public static hashPassword(password: string): string {
        return hashSync(password, 12);
    }

    public static checkIfUnencryptedPasswordIsValid(plainPassword: string, hash: string): boolean {
        return compareSync(plainPassword, hash);
    }
}
