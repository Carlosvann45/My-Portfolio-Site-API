import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { validateTechnology } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';
import { Technologies } from '../models/technologies';

/**
 * Handles getting all technologies
 * 
 * @param req request
 * @param res response
 */
const getTechnologies = async (req: Request, res: Response) => {
    const technologies = await Technologies.find();

    res.status(HttpCode.OK).json(technologies);
}

/**
 * Handles creating a technology
 * 
 * @param req request
 * @param res response
 */
const createTechnology = async (req: Request, res: Response) => {
    const techonology = req.body;
    
    if (!techonology || !validateTechnology(techonology)) {
        throw new BadRequest({ message: Errors.TECH_REQUIRED });
    }

    const newTechnology = await Technologies.create(techonology);

    res.status(HttpCode.CREATED).json(newTechnology);
}

/**
 * Handles updating a technology
 * 
 * @param req request
 * @param res response
 */
const updateTechnology = async (req: Request, res: Response) => {
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
}

/**
 * Handles deleting a technology
 * 
 * @param req request
 * @param res response
 */
const deleteTechnology = async (req: Request, res: Response) => {
    const id = req.params.id;
    const actualTechnology = await Technologies.findById(id);

    if (!actualTechnology) {
        throw new NotFound({ message: Errors.TECH_NOT_FOUND });
    }

    await Technologies.findByIdAndDelete(id);

    res.status(HttpCode.NO_CONTENT).json({});
}

export { getTechnologies, createTechnology, updateTechnology, deleteTechnology };