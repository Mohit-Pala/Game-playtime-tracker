import mongoose, {Document} from "mongoose"
import crypto from 'crypto';
import jwt, { Jwt } from 'jsonwebtoken';

export interface IUser extends Document {
    uName: string,
    hash: string,
    salt: string,
    setPass: (password: string) => void,
    checkPass: (password: string) => boolean,
    genJwt: () => Jwt
}

const userSchema = new mongoose.Schema({
    uName: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String
})

userSchema.methods.setPass = function (password: string) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
}

userSchema.methods.checkPass = function (password: string) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex')
    if(this.hash === hash) {
        return true
    }
    return false
}

userSchema.methods.genJwt = function () {
    const expiry = new Date()
    expiry.setDate(expiry.getDate() + 7)
    return jwt.sign({_id: this._id, uName: this.uName, exp: expiry.getTime()}, process.env.JWT_SECRET!);
}

export default mongoose.model<IUser>('User', userSchema)