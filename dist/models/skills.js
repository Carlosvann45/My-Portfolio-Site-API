"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
}, {
    timestamps: true,
});
const Skills = (0, mongoose_1.model)("skills", SkillSchema);
exports.Skills = Skills;
