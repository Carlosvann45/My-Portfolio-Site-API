import express, { Request, Response } from 'express';
import { HttpCode, Routes } from '../utils/constants';
import { validateExperince } from '../utils/validation';
import { BadRequest, NotFound } from '../models/errors';
import { Errors } from '../utils/constants';
import { Experinces } from '../models/experinces';
import Common from '../utils/common';
import asyncHandler from 'express-async-handler';

const experinceRoutes = express.Router();

experinceRoutes.get(Routes.EXPERINCE_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const experinces = await Experinces.find();

    res.status(HttpCode.OK).json(experinces);
}));

experinceRoutes.post(Routes.EXPERINCE_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const experince = req.body;
    
    if (!experince || !validateExperince(experince)) {
        throw new BadRequest({ message: Errors.EXPERINCE_REQUIRED });
    } else if (!Common.validDate(experince.startDate)) {
        throw new BadRequest({ message: Errors.EXPERINCE_DATES });
    } else if (experince.endDate && !Common.validDate(experince.endDate)) {
        throw new BadRequest({ message: Errors.EXPERINCE_DATES });
    }

    const newExperince = await Experinces.create(experince);

    res.status(HttpCode.CREATED).json(newExperince);
}));

experinceRoutes.put(Routes.EXPERINCE_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const experince = req.body;
    const actualExperince = await Experinces.findById(id);

    if (!actualExperince) {
        throw new NotFound({ message: Errors.EXPERINCE_NOT_FOUND });
    }  else  if (!validateExperince(experince)) {
        throw new BadRequest({ message: Errors.EXPERINCE_REQUIRED });
    } else if (!Common.validDate(experince.startDate)) {
        throw new BadRequest({ message: Errors.EXPERINCE_DATES });
    } else if (experince.endDate  && !Common.validDate(experince.endDate)) {
        throw new BadRequest({ message: Errors.EXPERINCE_DATES });
    }

    await Experinces.findByIdAndUpdate(id, experince);

    const newExperince = await Experinces.findById(id);

    res.status(HttpCode.OK).json(newExperince);
}));

experinceRoutes.delete(Routes.EXPERINCE_ID_ROUTE, asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const actualExperince = await Experinces.findById(id);

    if (!actualExperince) {
        throw new NotFound({ message: Errors.EXPERINCE_NOT_FOUND });
    }

    await Experinces.findByIdAndDelete(id);

    res.status(HttpCode.NO_CONTENT).json({});
}));

export default experinceRoutes;