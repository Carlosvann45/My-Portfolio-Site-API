import { Schema, Document, model } from "mongoose";

interface IEmail extends Document {
    email: string,
    subject: string,
    message: string
}

const EmailSchema = new Schema({
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    expire_at: {
        type: Date, 
        default: Date.now, 
        expires: 60
    } 
}, {
    timestamps: true
});

// removes expire_at from user view
EmailSchema.set('toJSON', {
    transform: (doc: any, ret: any, opt: any) => {
        delete ret['expire_at']
        return ret
    }
});

const Emails = model<IEmail>('emails', EmailSchema);

export { IEmail, Emails };