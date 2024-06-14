"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * Transporter config for sending emails
 */
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
    secure: true,
    auth: {
        user: process.env.SERVICE_EMAIL,
        pass: process.env.SERVICE_PASSWORD,
    },
});
exports.default = transporter;
