import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { BadRequest, InternalServerError } from '../models/errors';
import { Emails } from '../models/emails';
import { validateEmail } from '../utils/validation';
import Common from '../utils/common';
import asyncHandler from 'express-async-handler';

/**
 * Handles loging in user
 * 
 * @param req request
 * @param res response
 */
const createEmail = asyncHandler(async (req: Request, res: Response) => {
    const email = req.body;

    if (!email || !validateEmail(email)) {
        throw new BadRequest({ message: Errors.EMAIL_REQUIRED });
    }

    const existingEmail = await Emails.findOne({ email: email.email });

    if (existingEmail) {
        throw new BadRequest({ message: Errors.EMAIL_LIMIT });
    }

    const newEmail = await Emails.create(email);

    try {
        await Common.sendEmail(newEmail.email, newEmail.subject, newEmail.message)

        res.status(HttpCode.OK).json(newEmail);
    } catch (err) {
        console.log(err);
        
        await Emails.findByIdAndDelete(newEmail._id);

        throw new InternalServerError({
            message: Errors.EMAIL_ERROR
        });
    }
});

export { createEmail };