"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emails = void 0;
const mongoose_1 = require("mongoose");
const EmailSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    expire_at: {
        type: Date,
        default: Date.now,
        expires: 60
    }
}, {
    timestamps: true
});
// removes expire_at from user view
EmailSchema.set('toJSON', {
    transform: (doc, ret, opt) => {
        delete ret['expire_at'];
        return ret;
    }
});
const Emails = (0, mongoose_1.model)('emails', EmailSchema);
exports.Emails = Emails;
