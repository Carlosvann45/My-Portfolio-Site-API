import express from 'express';
import { Routes } from '../utils/constants';
import { 
    getProjects, createProject, updateProject, deleteProject 
} from '../controllers/projectController';
import jwtHandler from '../middleware/authMiddleware';
import asyncHandler from 'express-async-handler';

const projectRoutes = express.Router();

/**
 * Route for getting all projects
 */
projectRoutes.get(Routes.PROJECT_ROUTE, asyncHandler(getProjects));

/**
 * Route for creating a project
 */
projectRoutes.post(Routes.PROJECT_ROUTE, jwtHandler, asyncHandler(createProject));

/**
 * Route for updating a project
 */
projectRoutes.put(Routes.PROJECT_ID_ROUTE, jwtHandler, asyncHandler(updateProject));

/**
 * Route for deleting a project
 */
projectRoutes.delete(Routes.PROJECT_ID_ROUTE, jwtHandler, asyncHandler(deleteProject));

export default projectRoutes;