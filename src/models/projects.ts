import { Schema, Document, model } from "mongoose";

interface IProject extends Document {
    title: string,
    description: string,
    link: string,
    images: Array<string>,
}

const ProjectSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    images: { type: Array, required: true },
}, {
    timestamps: true
});

const Projects = model<IProject>('projects', ProjectSchema);

export { IProject, Projects };