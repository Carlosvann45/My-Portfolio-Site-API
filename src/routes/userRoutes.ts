import express from "express";
import asyncHandler from "express-async-handler";
import { Routes } from "../utils/constants";
import {
  loginUser,
  refreshToken,
  verifyToken,
} from "../controllers/userController";
import jwtHandler from "../middleware/authMiddleware";

const userRoutes = express.Router();

/**
 * Route to refresh a user token
 */
userRoutes.get(Routes.TOKEN_ROUTE, jwtHandler, asyncHandler(refreshToken));

/**
 * Route handles verifying token
 */
userRoutes.get(Routes.VERIFY_ROUTE, jwtHandler, asyncHandler(verifyToken));

/**
 * Route for loging in a user
 */
userRoutes.post(Routes.LOGIN_ROUTE, asyncHandler(loginUser));

export default userRoutes;
