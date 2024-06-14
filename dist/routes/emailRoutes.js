"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const emailController_1 = require("../controllers/emailController");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const errorRoutes = express_1.default.Router();
/**
 * Handles routes for creating emails
 */
errorRoutes.post(constants_1.Routes.EMAIL_ROUTE, (0, express_async_handler_1.default)(emailController_1.createEmail));
exports.default = errorRoutes;
