"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const experinceController_1 = require("../controllers/experinceController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const experinceRoutes = express_1.default.Router();
/**
 * Route for getting all experinces
 */
experinceRoutes.get(constants_1.Routes.EXPERINCE_ROUTE, (0, express_async_handler_1.default)(experinceController_1.getExperinces));
/**
 * Route for creating a experince
 */
experinceRoutes.post(constants_1.Routes.EXPERINCE_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(experinceController_1.createExperince));
/**
 * Route for updating a experince
 */
experinceRoutes.put(constants_1.Routes.EXPERINCE_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(experinceController_1.updateExperince));
/**
 * Route fro deleting a experince
 */
experinceRoutes.delete(constants_1.Routes.EXPERINCE_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(experinceController_1.deleteExperince));
exports.default = experinceRoutes;
