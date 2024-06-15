"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const constants_1 = require("../utils/constants");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const userRoutes = express_1.default.Router();
/**
 * Route to refresh a user token
 */
userRoutes.get(constants_1.Routes.TOKEN_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(userController_1.refreshToken));
/**
 * Route handles verifying token
 */
userRoutes.get(constants_1.Routes.VERIFY_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(userController_1.verifyToken));
/**
 * Route for loging in a user
 */
userRoutes.post(constants_1.Routes.LOGIN_ROUTE, (0, express_async_handler_1.default)(userController_1.loginUser));
exports.default = userRoutes;
