import { Schema, Document, model } from "mongoose";

interface ITechnology extends Document {
    name: string,
    image: string,
}

const TechnologySchema: Schema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});

const Technologies = model<ITechnology>('technologies', TechnologySchema);

export { ITechnology, Technologies };