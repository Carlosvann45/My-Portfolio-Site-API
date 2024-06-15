import { Request, Response } from "express";
import { HttpCode, Errors, Email, Misc } from "../utils/constants";
import { BadRequest, InternalServerError } from "../models/errors";
import { Emails } from "../models/emails";
import { validateEmail } from "../utils/validation";
import Common from "../utils/common";
import asyncHandler from "express-async-handler";

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

  const yesterday = new Date();

  yesterday.setDate(yesterday.getDate() - 1);

  const existingEmail = await Emails.find({
    email: email.email,
    sent_at: {
      $gte: yesterday,
    },
  });

  if (existingEmail.length > 0) {
    throw new BadRequest({ message: Errors.EMAIL_LIMIT });
  }

  const newEmail = await Emails.create(email);

  try {
    const serviceEmail = process.env.SERVICE_EMAIL as string;
    const serviceSubject = Misc.EMAIL_FROM_SUBJECT + newEmail.email;
    const serviceMessage =
      Misc.EMAIL_SUBJECT +
      newEmail.subject +
      Misc.EMAIL_MESSAGE +
      newEmail.message;

    await Common.sendEmail(serviceEmail, serviceSubject, serviceMessage);

    await Common.sendEmail(
      newEmail.email,
      Misc.EMAIL_AUTO_SUBJECT + serviceEmail,
      Email.RESPONSE_TEMPLATE,
    );

    res.status(HttpCode.OK).json(newEmail);
  } catch (err) {
    console.log(err);

    await Emails.findByIdAndDelete(newEmail._id);

    throw new InternalServerError({
      message: Errors.EMAIL_ERROR,
    });
  }
});

export { createEmail };
