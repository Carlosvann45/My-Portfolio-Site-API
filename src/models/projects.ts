import { Schema, Document, model } from "mongoose";

interface IProject extends Document {
  title: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  association?: string;
  description: string;
  skills: Array<string>;
  links: Array<{ image: string; text: string }>;
}

const ProjectSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    association: { type: String },
    description: { type: String, required: true },
    skills: { type: Array<string> },
    links: { type: Array<{ image: string; text: string }> },
  },
  {
    timestamps: true,
  },
);

const Projects = model<IProject>("projects", ProjectSchema);

export { IProject, Projects };
