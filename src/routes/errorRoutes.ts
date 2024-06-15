import express from "express";
import { Routes, Errors } from "../utils/constants";
import { NotFound } from "../models/errors";
import asyncHandler from "express-async-handler";

const errorRoutes = express.Router();

/**
 * Route to handle routes that dont exist
 */
errorRoutes.all(
  Routes.ALL_ROUTE,
  asyncHandler(async () => {
    throw new NotFound({ message: Errors.ROUTE_NOT_FOUND });
  }),
);

export default errorRoutes;
