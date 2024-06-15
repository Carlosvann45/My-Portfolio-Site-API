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
const errors_1 = require("../models/errors");
const constants_1 = require("../utils/constants");
const users_1 = require("../models/users");
const common_1 = __importDefault(require("../utils/common"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
/**
 * Handles loging in user
 *
 * @param req request
 * @param res response
 * @param next next function
 */
const jwtHandler = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    let token;
    if (authHeader && (authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith(constants_1.Misc.BEARER))) {
        try {
            token = authHeader.split(" ")[1];
            const decodedId = (yield common_1.default.verifyJwt(token));
            const user = yield users_1.Users.findById(decodedId.__id);
            if (!user) {
                throw new errors_1.Unauthorized({ message: constants_1.Errors.JWT_INVALID });
            }
            next();
        }
        catch (err) {
            throw new errors_1.Unauthorized({ message: constants_1.Errors.JWT_INVALID });
        }
    }
    if (!token) {
        throw new errors_1.Unauthorized({ message: constants_1.Errors.JWT_INVALID_NO_TOKEN });
    }
}));
exports.default = jwtHandler;
