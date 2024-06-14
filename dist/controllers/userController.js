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
exports.verifyToken = exports.refreshToken = exports.loginUser = void 0;
const constants_1 = require("../utils/constants");
const errors_1 = require("../models/errors");
const users_1 = require("../models/users");
const jwt_1 = __importDefault(require("../models/jwt"));
const common_1 = __importDefault(require("../utils/common"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
/**
 * Handles loging in user
 *
 * @param req request
 * @param res response
 */
const loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!common_1.default.isNotEmpty(username) && !common_1.default.isNotEmpty(password)) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.LOGIN_REQUIRED });
    }
    const user = yield users_1.Users.findOne({ username });
    if (!user || !(yield common_1.default.hashVerified(password, user.password))) {
        throw new errors_1.BadRequest({ message: constants_1.Errors.BAD_LOGIN });
    }
    const response = new jwt_1.default(yield common_1.default.generateJwt(user._id), yield common_1.default.generateJwt(user._id, true));
    res.status(constants_1.HttpCode.OK).json(response.json());
}));
exports.loginUser = loginUser;
/**
 * Handles refreshing token for a user
 *
 * @param req request
 * @param res response
 */
const refreshToken = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const verifiedToken = yield common_1.default.verifyJwt(token);
    if (!verifiedToken.isRefreshtoken) {
        throw new errors_1.Unauthorized({ message: constants_1.Errors.JWT_INVALID_REFRESH });
    }
    const response = new jwt_1.default(yield common_1.default.generateJwt(verifiedToken.__id), token);
    res.status(constants_1.HttpCode.OK).json(response.json());
}));
exports.refreshToken = refreshToken;
const verifyToken = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(constants_1.HttpCode.OK).json({
        isVerified: true
    });
}));
exports.verifyToken = verifyToken;
