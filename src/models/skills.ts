import { Schema, Document, model } from "mongoose";

interface ISkill extends Document {
    name: string,
}

const SkillSchema: Schema = new Schema({
    name: { type: String, required: true }
}, {
    timestamps: true
});

const Skills = model<ISkill>('skills', SkillSchema);

export { ISkill, Skills };