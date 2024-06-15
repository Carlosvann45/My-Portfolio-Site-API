"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emails = void 0;
const mongoose_1 = require("mongoose");
const EmailSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    sent_at: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});
const Emails = (0, mongoose_1.model)("emails", EmailSchema);
exports.Emails = Emails;
