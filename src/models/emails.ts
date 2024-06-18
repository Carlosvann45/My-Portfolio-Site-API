import { Schema, Document, model } from 'mongoose';

interface IEmail extends Document {
  email: string;
  subject: string;
  message: string;
}

const EmailSchema = new Schema(
  {
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    sent_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

const Emails = model<IEmail>('emails', EmailSchema);

export { IEmail, Emails };
