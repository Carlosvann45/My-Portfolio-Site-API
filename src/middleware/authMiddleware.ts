import { Request, Response, NextFunction } from 'express';
import { Unauthorized } from '../models/errors';
import { Misc, Errors } from '../utils/constants';
import { Users } from '../models/users';
import Common from '../utils/common';
import asyncHandler from 'express-async-handler';
import { JwtPayload } from 'jsonwebtoken';

/**
 * Handles loging in user
 *
 * @param req request
 * @param res response
 * @param next next function
 */
const jwtHandler = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    let token;

    if (authHeader && authHeader?.startsWith(Misc.BEARER)) {
      try {
        token = authHeader.split(' ')[1];

        const decodedId = (await Common.verifyJwt(token)) as JwtPayload;

        const user = await Users.findById(decodedId.__id);

        if (!user) {
          throw new Unauthorized({ message: Errors.JWT_INVALID });
        }

        next();
      } catch (err) {
        throw new Unauthorized({ message: Errors.JWT_INVALID });
      }
    }

    if (!token) {
      throw new Unauthorized({ message: Errors.JWT_INVALID_NO_TOKEN });
    }
  },
);

export default jwtHandler;
