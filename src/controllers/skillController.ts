import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { validateSkill } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';
import { Skills } from '../models/skills';

/**
 * Handles getting all skills
 *
 * @param req request
 * @param res response
 */
const getSkills = async (req: Request, res: Response) => {
  const skills = await Skills.find();

  res.status(HttpCode.OK).json(skills);
};

/**
 * Handles creating a skill
 *
 * @param req request
 * @param res response
 */
const createSkill = async (req: Request, res: Response) => {
  const skill = req.body;

  if (!skill || !validateSkill(skill)) {
    throw new BadRequest({ message: Errors.SKILL_REQUIRED });
  }

  const newSkill = await Skills.create(skill);

  res.status(HttpCode.CREATED).json(newSkill);
};

/**
 * Handles updating a skill
 *
 * @param req request
 * @param res response
 */
const updateSkill = async (req: Request, res: Response) => {
  const id = req.params.id;
  const skill = req.body;
  const actualSkill = await Skills.findById(id);

  if (!actualSkill) {
    throw new NotFound({ message: Errors.SKILL_NOT_FOUND });
  } else if (!validateSkill(skill)) {
    throw new BadRequest({ message: Errors.SKILL_REQUIRED });
  }

  await Skills.findByIdAndUpdate(id, skill);

  const newSkill = await Skills.findById(id);

  res.status(HttpCode.OK).json(newSkill);
};

/**
 * Handles deleting a skill
 *
 * @param req request
 * @param res response
 */
const deleteSkill = async (req: Request, res: Response) => {
  const id = req.params.id;
  const actualSkill = await Skills.findById(id);

  if (!actualSkill) {
    throw new NotFound({ message: Errors.SKILL_NOT_FOUND });
  }

  await Skills.findByIdAndDelete(id);

  res.status(HttpCode.NO_CONTENT).json({});
};

export { getSkills, createSkill, updateSkill, deleteSkill };
