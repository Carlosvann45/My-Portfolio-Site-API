import express from "express";
import asyncHandler from "express-async-handler";
import { Routes } from "../utils/constants";
import { createEmail } from "../controllers/emailController";

const errorRoutes = express.Router();

/**
 * Handles routes for creating emails
 */
errorRoutes.post(Routes.EMAIL_ROUTE, asyncHandler(createEmail));

export default errorRoutes;
