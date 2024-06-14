import { Schema, Document, model } from "mongoose";

interface IExperince extends Document {
    company: string,
    title: string,
    startDate: string,
    endDate?: string,
    descriptions: Array<string>,
}

const ExperinceSchema: Schema = new Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    descriptions: { type: Array, required: true }
}, {
    timestamps: true
});

const Experinces = model<IExperince>('experinces', ExperinceSchema);

export { IExperince, Experinces };