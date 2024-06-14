"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const projectController_1 = require("../controllers/projectController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const projectRoutes = express_1.default.Router();
/**
 * Route for getting all projects
 */
projectRoutes.get(constants_1.Routes.PROJECT_ROUTE, (0, express_async_handler_1.default)(projectController_1.getProjects));
/**
 * Route for creating a project
 */
projectRoutes.post(constants_1.Routes.PROJECT_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(projectController_1.createProject));
/**
 * Route for updating a project
 */
projectRoutes.put(constants_1.Routes.PROJECT_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(projectController_1.updateProject));
/**
 * Route for deleting a project
 */
projectRoutes.delete(constants_1.Routes.PROJECT_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(projectController_1.deleteProject));
exports.default = projectRoutes;
