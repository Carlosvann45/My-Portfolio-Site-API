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
const constants_1 = require("./constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const transporter_1 = __importDefault(require("../config/transporter"));
/*
 * Common functions
 */
class Common {
    /**
     * checks if any input is valid or empty
     *
     * @param data data to check
     * @returns boolean
     */
    static isNotEmpty(data) {
        return (data === null || data === void 0 ? void 0 : data.trim()) != "";
    }
    /**
     * checks if string is a valid link
     *
     * @param data link to test
     * @returns boolean
     */
    static isLink(data) {
        return constants_1.Regex.LINK.test(data);
    }
    /**
     * checks if string is a valid date
     *
     * @param date date stirng
     * @returns boolean
     */
    static validDate(date) {
        return constants_1.Regex.DATE.test(date);
    }
    /**
     * Handles encrypting data
     *
     * @param data data to hash
     * @returns string promise
     */
    static hashData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const env = Number(process.env.SALT);
            const salt = yield bcryptjs_1.default.genSalt(env);
            return bcryptjs_1.default.hash(data, salt);
        });
    }
    /**
     * Handles verifing data matches encrypted data
     *
     * @param data data to verify
     * @param hash has to verify
     * @returns boolean promise
     */
    static hashVerified(data, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcryptjs_1.default.compare(data, hash);
        });
    }
    /**
     * Handles generating either a normal or refresh token
     * @param __id user id
     * @param refresh refresh boolean
     * @returns string promise
     */
    static generateJwt(__id, refresh = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const experation = refresh
                ? process.env.JWT_EXP_REFRESH
                : process.env.JWT_EXP;
            return jsonwebtoken_1.default.sign({
                __id,
                isRefreshtoken: refresh,
            }, process.env.JWT_SECRET, {
                expiresIn: experation,
                algorithm: process.env.JWT_ALG,
            });
        });
    }
    /**
     * Handles verifiying if token is valid
     *
     * @param token token
     * @returns string/jwtpatload
     */
    static verifyJwt(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, {
                ignoreExpiration: false,
            });
        });
    }
    /**
     * Handles sending email
     *
     * @param email email
     * @param subject subject
     * @param message message
     */
    static sendEmail(email, subject, message, isHtml = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isHtml) {
                yield transporter_1.default.sendMail({
                    from: `"CS Dev Services" <${process.env.SERVICE_EMAIL}>`,
                    to: email,
                    subject: subject,
                    text: message,
                });
            }
            else {
                yield transporter_1.default.sendMail({
                    from: `"CS Dev Services" <${process.env.SERVICE_EMAIL}>`,
                    to: email,
                    subject: subject,
                    html: message,
                });
            }
        });
    }
}
exports.default = Common;
