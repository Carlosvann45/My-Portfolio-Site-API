"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    summary: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    publicLinks: {
        type: (Array),
        required: true,
    },
}, {
    timestamps: true,
});
const Users = (0, mongoose_1.model)('users', UserSchema);
exports.Users = Users;
