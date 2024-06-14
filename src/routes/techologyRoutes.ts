import express from 'express';
import { Routes } from '../utils/constants';
import { 
    getTechnologies, createTechnology, updateTechnology, deleteTechnology 
} from '../controllers/technologyController';
import jwtHandler from '../middleware/authMiddleware';
import asyncHandler from 'express-async-handler';

const technologyRoutes = express.Router();

/**
 * Route for getting all technologies
 */
technologyRoutes.get(Routes.TECH_ROUTE, asyncHandler(getTechnologies));

/**
 * Route for creating a technology
 */
technologyRoutes.post(Routes.TECH_ROUTE, jwtHandler, asyncHandler(createTechnology));

/**
 * Route for updating a technology
 */
technologyRoutes.put(Routes.TECH_ID_ROUTE, jwtHandler, asyncHandler(updateTechnology));

/**
 * Route for deleting a technology
 */
technologyRoutes.delete(Routes.TECH_ID_ROUTE, jwtHandler, asyncHandler(deleteTechnology));

export default technologyRoutes;