"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const constants_1 = require("../utils/constants");
const educationController_1 = require("../controllers/educationController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const educationRoutes = express_1.default.Router();
/**
 * Route for getting all education data
 */
educationRoutes.get(constants_1.Routes.EDUCATION_ROUTE, (0, express_async_handler_1.default)(educationController_1.getEducations));
/**
 * Route for creating an education object
 */
educationRoutes.post(constants_1.Routes.EDUCATION_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(educationController_1.createEducation));
/**
 * Route for updating an education project
 */
educationRoutes.put(constants_1.Routes.EDUCATION_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(educationController_1.updateEducation));
/**
 * Route for deleting an education project
 */
educationRoutes.delete(constants_1.Routes.EDUCATION_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(educationController_1.deleteEducation));
exports.default = educationRoutes;
