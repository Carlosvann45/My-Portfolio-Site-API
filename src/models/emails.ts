import { Schema, Document, model } from "mongoose";

interface IEmail extends Document {
    email: string,
    subject: string,
    message: string
}

const EmailSchema = new Schema({
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    sent_at: {
        type: Date, 
        default: Date.now
    } 
}, {
    timestamps: true
});

// removes expire_at from user view
EmailSchema.set('toJSON', {
    transform: (doc: any, ret: any, opt: any) => {
        delete ret['sent_at']
        return ret
    }
});

const Emails = model<IEmail>('emails', EmailSchema);

export { IEmail, Emails };