import express from 'express';
import asyncHandler from 'express-async-handler';
import { Routes } from '../utils/constants';
import {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController';
import jwtHandler from '../middleware/authMiddleware';

const educationRoutes = express.Router();

/**
 * Route for getting all education data
 */
educationRoutes.get(Routes.EDUCATION_ROUTE, asyncHandler(getEducations));

/**
 * Route for creating an education object
 */
educationRoutes.post(
  Routes.EDUCATION_ROUTE,
  jwtHandler,
  asyncHandler(createEducation),
);

/**
 * Route for updating an education project
 */
educationRoutes.put(
  Routes.EDUCATION_ID_ROUTE,
  jwtHandler,
  asyncHandler(updateEducation),
);

/**
 * Route for deleting an education project
 */
educationRoutes.delete(
  Routes.EDUCATION_ID_ROUTE,
  jwtHandler,
  asyncHandler(deleteEducation),
);

export default educationRoutes;
