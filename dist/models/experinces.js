"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experinces = void 0;
const mongoose_1 = require("mongoose");
const ExperinceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    employmentType: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    descriptions: { type: (Array) },
    skills: { type: (Array) },
}, {
    timestamps: true,
});
const Experinces = (0, mongoose_1.model)("experinces", ExperinceSchema);
exports.Experinces = Experinces;
