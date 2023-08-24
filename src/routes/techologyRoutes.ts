import express, { Request, Response } from 'express';
import { HttpCode, Routes, Errors } from '../utils/constants';
import { validateTechnology } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';
import { Technologies } from '../models/technologies';
import asyncHandler from 'express-async-handler';

const technologyRoutes = express.Router();

technologyRoutes.get(Routes.TECH_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const technologies = await Technologies.find();

    res.status(HttpCode.OK).json(technologies);
}));

technologyRoutes.post(Routes.TECH_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const techonology = req.body;
    
    if (!techonology || !validateTechnology(techonology)) {
        throw new BadRequest({ message: Errors.TECH_REQUIRED });
    }

    const newTechnology = await Technologies.create(techonology);

    res.status(HttpCode.CREATED).json(newTechnology);
}));

technologyRoutes.put(Routes.TECH_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const techonology = req.body;
    const actualTechnology = await Technologies.findById(id);

    if (!actualTechnology) {
        throw new NotFound({ message: Errors.TECH_NOT_FOUND });
    } else if (!validateTechnology(techonology)) {
        throw new BadRequest({ message: Errors.TECH_REQUIRED });
    }

    await Technologies.findByIdAndUpdate(id, techonology);

    const newTechnology = await Technologies.findById(id);

    res.status(HttpCode.OK).json(newTechnology);
}));

technologyRoutes.delete(Routes.TECH_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const actualTechnology = await Technologies.findById(id);

    if (!actualTechnology) {
        throw new NotFound({ message: Errors.TECH_NOT_FOUND });
    }

    await Technologies.findByIdAndDelete(id);

    res.status(HttpCode.NO_CONTENT).json({});
}));

export default technologyRoutes;