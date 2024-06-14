"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const technologyController_1 = require("../controllers/technologyController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const technologyRoutes = express_1.default.Router();
/**
 * Route for getting all technologies
 */
technologyRoutes.get(constants_1.Routes.TECH_ROUTE, (0, express_async_handler_1.default)(technologyController_1.getTechnologies));
/**
 * Route for creating a technology
 */
technologyRoutes.post(constants_1.Routes.TECH_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(technologyController_1.createTechnology));
/**
 * Route for updating a technology
 */
technologyRoutes.put(constants_1.Routes.TECH_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(technologyController_1.updateTechnology));
/**
 * Route for deleting a technology
 */
technologyRoutes.delete(constants_1.Routes.TECH_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(technologyController_1.deleteTechnology));
exports.default = technologyRoutes;
