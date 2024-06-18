import { Schema, Document, model } from 'mongoose';

interface IExperince extends Document {
  title: string;
  company: string;
  employmentType: string;
  city: string;
  state: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  descriptions: Array<string>;
  skills: Array<string>;
}

const ExperinceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    employmentType: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    descriptions: { type: Array<string> },
    skills: { type: Array<string> },
  },
  {
    timestamps: true,
  },
);

const Experinces = model<IExperince>('experinces', ExperinceSchema);

export { IExperince, Experinces };
