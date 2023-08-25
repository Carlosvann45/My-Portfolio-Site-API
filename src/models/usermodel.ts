import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
    username: string,
    password: string,
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

const Users = model<IUser>('users', UserSchema);

export { IUser, Users };