import express from 'express';
import asyncHandler from 'express-async-handler';
import { Routes } from '../utils/constants';
import {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController';
import jwtHandler from '../middleware/authMiddleware';

const skillRoutes = express.Router();

/**
 * Route for getting all skills
 */
skillRoutes.get(Routes.SKILL_ROUTE, asyncHandler(getSkills));

/**
 * Route for creating a skill
 */
skillRoutes.post(Routes.SKILL_ROUTE, jwtHandler, asyncHandler(createSkill));

/**
 * Route for updating a skill
 */
skillRoutes.put(Routes.SKILL_ID_ROUTE, jwtHandler, asyncHandler(updateSkill));

/**
 * Route for deleting a skill
 */
skillRoutes.delete(
  Routes.SKILL_ID_ROUTE,
  jwtHandler,
  asyncHandler(deleteSkill),
);

export default skillRoutes;
