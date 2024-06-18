"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Educations = void 0;
const mongoose_1 = require("mongoose");
const EducationSchema = new mongoose_1.Schema({
    school: { type: String, required: true },
    degree: { type: String, required: true },
    major: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    activities: {
        type: Map,
        of: new mongoose_1.Schema({
            name: { type: String },
            description: { type: String },
        }),
    },
}, {
    timestamps: true,
});
const Educations = (0, mongoose_1.model)('educations', EducationSchema);
exports.Educations = Educations;
