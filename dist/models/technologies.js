"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Technologies = void 0;
const mongoose_1 = require("mongoose");
const TechnologySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});
const Technologies = (0, mongoose_1.model)('technologies', TechnologySchema);
exports.Technologies = Technologies;
