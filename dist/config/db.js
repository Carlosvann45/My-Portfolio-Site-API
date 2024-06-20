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
        const publicLinks = new Array();
        const summary = 'Dedicated and enthusiastic professional, highly motivated and driven, with exceptional abilities in both team-based and independent work environments. Possessing a robust work ethic and superior organizational skills, I consistently bring efficiency and structure to any setting. Reliable and committed to delivering high-quality results, I have expertise in modernizing workplaces and maintaining high standards of organization. Resourceful and personable, I excel in multitasking and managing diverse responsibilities. I thrive on embracing new challenges and continuously enhancing my skill set. My adaptability and strong interpersonal skills enable me to effectively collaborate with colleagues and stakeholders, ensuring successful project outcomes. Adept at working independently, I quickly master new tasks and technologies, demonstrating a proactive approach to problem-solving and innovation. My dedication to professional growth and excellence makes me a valuable asset to any organization, eager to contribute to its success and development.';
        const city = 'Owings Mills';
        const state = 'MD';
        const zip = '21117';
        publicLinks.push({
            name: 'GitHub',
            link: 'https://github.com/Carlosvann45',
        });
        publicLinks.push({
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/carlos-santiago-b53967224/',
        });
        if (!user) {
            password = yield common_1.default.hashData(password);
            yield users_1.Users.create({
                username,
                password,
                summary,
                city,
                state,
                zip,
                publicLinks,
            });
        }
    }
    catch (err) {
        console.log(`DB Error: ${err}`);
        process.exit(1);
    }
    console.log('Users Loaded');
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
    console.log('Loading db');
    yield loadDb();
});
exports.default = connectDb;
