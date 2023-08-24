import express, { Request, Response } from 'express';
import { HttpCode, Routes, Errors } from '../utils/constants';
import { validateProject } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';
import { Projects } from '../models/projects';
import asyncHandler from 'express-async-handler';

const projectRoutes = express.Router();

projectRoutes.get(Routes.PROJECT_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const projects = await Projects.find();

    res.status(HttpCode.OK).json(projects);
}));

projectRoutes.post(Routes.PROJECT_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const project = req.body;
    
    if (!project || !validateProject(project)) {
        throw new BadRequest({ message: Errors.PROJECT_REQUIRED });
    }

    const newProject = await Projects.create(project);

    res.status(HttpCode.CREATED).json(newProject);
}));

projectRoutes.put(Routes.PROJECT_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
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
}));

projectRoutes.delete(Routes.PROJECT_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const actualProject = await Projects.findById(id);

    if (!actualProject) {
        throw new NotFound({ message: Errors.PROJECT_NOT_FOUND });
    }

    await Projects.findByIdAndDelete(id);

    res.status(HttpCode.NO_CONTENT).json({});
}));

export default projectRoutes;