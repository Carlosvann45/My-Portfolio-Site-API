"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    isCurrent: { type: Boolean, required: true },
    association: { type: String },
    description: { type: String, required: true },
    skills: { type: (Array) },
    links: { type: (Array) },
}, {
    timestamps: true,
});
const Projects = (0, mongoose_1.model)('projects', ProjectSchema);
exports.Projects = Projects;
