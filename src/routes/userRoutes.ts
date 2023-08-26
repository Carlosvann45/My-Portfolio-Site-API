import express from 'express';
import { Routes } from '../utils/constants';
import { loginUser, refreshToken } from '../controllers/userController';
import jwtHandler from '../middleware/authMiddleware';
import asyncHandler from 'express-async-handler';

const userRoutes = express.Router();

/**
 * Route for loging in a user
 */
userRoutes.post(Routes.LOGIN_ROUTE, asyncHandler(loginUser));

/**
 * Route to refresh a user token
 */
userRoutes.get(Routes.TOKEN_ROUTE, jwtHandler, asyncHandler(refreshToken));

export default userRoutes;