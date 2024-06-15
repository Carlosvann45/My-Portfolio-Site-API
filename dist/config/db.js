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
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = require("../models/users");
const common_1 = __importDefault(require("../utils/common"));
const loadDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const username = process.env.USER_USERNAME;
    let password = process.env.USER_PASSWORD;
    try {
        const user = yield users_1.Users.findOne({ username });
        if (!user) {
            password = yield common_1.default.hashData(password);
            yield users_1.Users.create({
                username,
                password,
            });
        }
    }
    catch (err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }
    console.log("Users Loaded");
});
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connect = yield mongoose_1.default.connect(process.env.DB_URI);
        console.log(`MongoDB Connected ${connect.connection.host}`);
    }
    catch (err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }
    console.log("Loading db");
    yield loadDb();
});
exports.default = connectDb;
