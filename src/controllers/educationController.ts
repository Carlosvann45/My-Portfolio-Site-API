import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { Educations } from '../models/education';
import { validateEducation } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';

/**
 * Handles getting all education data
 *
 * @param req request
 * @param res response
 */
const getEducations = async (req: Request, res: Response) => {
  const educations = await Educations.find();

  res.status(HttpCode.OK).json(educations);
};

/**
 * Handles creating an education
 *
 * @param req request
 * @param res response
 */
const createEducation = async (req: Request, res: Response) => {
  const education = req.body;

  if (!education || !validateEducation(education)) {
    throw new BadRequest({ message: Errors.EDUCATION_REQUIRED });
  }

  const newEducation = await Educations.create(education);

  res.status(HttpCode.CREATED).json(newEducation);
};

/**
 * Handles updating an education object
 *
 * @param req request
 * @param res response
 */
const updateEducation = async (req: Request, res: Response) => {
  const id = req.params.id;
  const education = req.body;
  const actualEducation = await Educations.findById(id);

  if (!actualEducation) {
    throw new NotFound({ message: Errors.EDUCATION_NOT_FOUND });
  } else if (!validateEducation(education)) {
    throw new BadRequest({ message: Errors.EDUCATION_REQUIRED });
  }

  await Educations.findByIdAndUpdate(id, education);

  const newEducation = await Educations.findById(id);

  res.status(HttpCode.OK).json(newEducation);
};

/**
 * Handles deleting an education object
 *
 * @param req request
 * @param res response
 */
const deleteEducation = async (req: Request, res: Response) => {
  const id = req.params.id;
  const actualEducation = await Educations.findById(id);

  if (!actualEducation) {
    throw new NotFound({ message: Errors.EDUCATION_NOT_FOUND });
  }

  await Educations.findByIdAndDelete(id);

  res.status(HttpCode.NO_CONTENT).json({});
};

export { getEducations, createEducation, updateEducation, deleteEducation };
