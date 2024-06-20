import { Schema, Document, model } from 'mongoose';

interface IUser extends Document {
  __id: string;
  username: string;
  password: string;
  summary: string;
  city: string;
  state: string;
  zip: string;
  publicLinks: Array<{ name: string; link: string }>;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    summary: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    publicLinks: {
      type: Array<{ name: string; link: string }>,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Users = model<IUser>('users', UserSchema);

export { IUser, Users };
