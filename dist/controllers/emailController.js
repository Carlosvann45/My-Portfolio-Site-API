"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmail = void 0;
const constants_1 = require("../utils/constants");
const errors_1 = require("../models/errors");
const emails_1 = require("../models/emails");
const validation_1 = require("../utils/validation");
const common_1 = __importDefault(require("../utils/common"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
/**
 * Handles loging in user
 *
 * @param req request
 * @param res response
 */
const createEmail = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body;
    if (!email || !(0, validation_1.validateEmail)(email)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EMAIL_REQUIRED });
    }
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const existingEmail = yield emails_1.Emails.find({
        email: email.email,
        sent_at: {
            $gte: yesterday
        }
    });
    if (existingEmail) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.EMAIL_LIMIT });
    }
    const newEmail = yield emails_1.Emails.create(email);
    try {
        yield common_1.default.sendEmail(process.env.SERVICE_EMAIL, newEmail.subject, newEmail.message);
        yield common_1.default.sendEmail(newEmail.email, newEmail.subject, constants_1.Email.RESPONSE_TEMPLATE);
        res.status(constants_1.HttpCode.OK).json(newEmail);
    }
    catch (err) {
        console.log(err);
        yield emails_1.Emails.findByIdAndDelete(newEmail._id);
        throw new errors_1.InternalServerError({
            message: constants_1.Errors.EMAIL_ERROR
        });
    }
}));
exports.createEmail = createEmail;
