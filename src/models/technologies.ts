import { Schema, Document, model } from "mongoose";

interface ITechnology extends Document {
    name: string,
    images: Array<string>,
}

const TechnologySchema: Schema = new Schema({
    name: { type: String, required: true },
    images: { type: Array, required: true }
}, {
    timestamps: true
});

const Technologies = model<ITechnology>('technologies', TechnologySchema);

export { ITechnology, Technologies };