import { Request, Response } from "express";
import { HttpCode, Errors } from "../utils/constants";
import { BadRequest, NotFound } from "../models/errors";
import { validateExperince } from "../utils/validation";
import { Experinces } from "../models/experinces";

/**
 * Handles getting all experinces
 *
 * @param req request
 * @param res response
 */
const getExperinces = async (req: Request, res: Response) => {
  const experinces = await Experinces.find();

  res.status(HttpCode.OK).json(experinces);
};

/**
 * Handles creating a experince
 *
 * @param req request
 * @param res response
 */
const createExperince = async (req: Request, res: Response) => {
  const experince = req.body;

  if (!experince || !validateExperince(experince)) {
    throw new BadRequest({ message: Errors.EXPERINCE_REQUIRED });
  }

  const newExperince = await Experinces.create(experince);

  res.status(HttpCode.CREATED).json(newExperince);
};

/**
 * Handles updating a experince
 *
 * @param req request
 * @param res response
 */
const updateExperince = async (req: Request, res: Response) => {
  const id = req.params.id;
  const experince = req.body;
  const actualExperince = await Experinces.findById(id);

  if (!actualExperince) {
    throw new NotFound({ message: Errors.EXPERINCE_NOT_FOUND });
  } else if (!validateExperince(experince)) {
    throw new BadRequest({ message: Errors.EXPERINCE_REQUIRED });
  }

  await Experinces.findByIdAndUpdate(id, experince);

  const newExperince = await Experinces.findById(id);

  res.status(HttpCode.OK).json(newExperince);
};

/**
 * Handles deleting a experince
 *
 * @param req request
 * @param res response
 */
const deleteExperince = async (req: Request, res: Response) => {
  const id = req.params.id;
  const actualExperince = await Experinces.findById(id);

  if (!actualExperince) {
    throw new NotFound({ message: Errors.EXPERINCE_NOT_FOUND });
  }

  await Experinces.findByIdAndDelete(id);

  res.status(HttpCode.NO_CONTENT).json({});
};

export { getExperinces, createExperince, updateExperince, deleteExperince };
