"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experinces = void 0;
const mongoose_1 = require("mongoose");
const ExperinceSchema = new mongoose_1.Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String },
    descriptions: { type: Array, required: true }
}, {
    timestamps: true
});
const Experinces = (0, mongoose_1.model)('experinces', ExperinceSchema);
exports.Experinces = Experinces;
