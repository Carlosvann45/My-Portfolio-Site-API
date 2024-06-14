import express from 'express';
import { Routes } from '../utils/constants';
import { 
    getExperinces, createExperince, updateExperince, deleteExperince 
} from '../controllers/experinceController';
import jwtHandler from '../middleware/authMiddleware';
import asyncHandler from 'express-async-handler';

const experinceRoutes = express.Router();

/**
 * Route for getting all experinces
 */
experinceRoutes.get(Routes.EXPERINCE_ROUTE, asyncHandler(getExperinces));

/**
 * Route for creating a experince
 */
experinceRoutes.post(Routes.EXPERINCE_ROUTE, jwtHandler, asyncHandler(createExperince));

/**
 * Route for updating a experince
 */
experinceRoutes.put(Routes.EXPERINCE_ID_ROUTE, jwtHandler, asyncHandler(updateExperince));

/**
 * Route fro deleting a experince
 */
experinceRoutes.delete(Routes.EXPERINCE_ID_ROUTE, jwtHandler, asyncHandler(deleteExperince));

export default experinceRoutes;