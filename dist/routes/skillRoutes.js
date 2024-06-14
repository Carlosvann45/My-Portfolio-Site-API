"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const skillController_1 = require("../controllers/skillController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const skillRoutes = express_1.default.Router();
/**
 * Route for getting all skills
 */
skillRoutes.get(constants_1.Routes.SKILL_ROUTE, (0, express_async_handler_1.default)(skillController_1.getSkills));
/**
 * Route for creating a skill
 */
skillRoutes.post(constants_1.Routes.SKILL_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(skillController_1.createSkill));
/**
 * Route for updating a skill
 */
skillRoutes.put(constants_1.Routes.SKILL_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(skillController_1.updateSkill));
/**
 * Route for deleting a skill
 */
skillRoutes.delete(constants_1.Routes.SKILL_ID_ROUTE, authMiddleware_1.default, (0, express_async_handler_1.default)(skillController_1.deleteSkill));
exports.default = skillRoutes;
