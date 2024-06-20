import { Schema, Document, model } from 'mongoose';

interface IEducation extends Document {
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  grade: number;
  activities: Array<{ name: string; description: string }>;
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
      type: Array<{ name: string; description: string }>,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Educations = model<IEducation>('educations', EducationSchema);

export { IEducation, Educations };
