import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { Projects } from '../models/projects';
import { validateProject } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';

/**
 * Handles getting all projects
 *
 * @param req request
 * @param res response
 */
const getProjects = async (req: Request, res: Response) => {
  const projects = await Projects.find();

  res.status(HttpCode.OK).json(projects);
};

/**
 * Handles creating a project
 *
 * @param req request
 * @param res response
 */
const createProject = async (req: Request, res: Response) => {
  const project = req.body;

  if (!project || !validateProject(project)) {
    throw new BadRequest({ message: Errors.PROJECT_REQUIRED });
  }

  const newProject = await Projects.create(project);

  res.status(HttpCode.CREATED).json(newProject);
};

/**
 * Handles updating a project
 *
 * @param req request
 * @param res response
 */
const updateProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const project = req.body;
  const actualProject = await Projects.findById(id);

  if (!actualProject) {
    throw new NotFound({ message: Errors.PROJECT_NOT_FOUND });
  } else if (!validateProject(project)) {
    throw new BadRequest({ message: Errors.PROJECT_REQUIRED });
  }

  await Projects.findByIdAndUpdate(id, project);

  const newProject = await Projects.findById(id);

  res.status(HttpCode.OK).json(newProject);
};

/**
 * Handles deleting a project
 *
 * @param req request
 * @param res response
 */
const deleteProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const actualProject = await Projects.findById(id);

  if (!actualProject) {
    throw new NotFound({ message: Errors.PROJECT_NOT_FOUND });
  }

  await Projects.findByIdAndDelete(id);

  res.status(HttpCode.NO_CONTENT).json({});
};

export { getProjects, createProject, updateProject, deleteProject };
