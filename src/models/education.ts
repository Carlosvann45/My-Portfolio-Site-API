import { Schema, Document, model } from 'mongoose';

interface IEducation extends Document {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  grade: number;
  activities: Map<string, string>;
}

const EducationSchema: Schema = new Schema(
  {
    school: { type: String, required: true },
    degree: { type: String, required: true },
    major: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    activities: {
      type: Map,
      of: new Schema({
        name: { type: String },
        description: { type: String },
      }),
    },
  },
  {
    timestamps: true,
  },
);

const Educations = model<IEducation>('educations', EducationSchema);

export { IEducation, Educations };
