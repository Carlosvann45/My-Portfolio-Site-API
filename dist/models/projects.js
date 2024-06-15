"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    images: { type: Array, required: true },
}, {
    timestamps: true,
});
const Projects = (0, mongoose_1.model)("projects", ProjectSchema);
exports.Projects = Projects;
