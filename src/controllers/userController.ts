import { Request, Response } from 'express';
import { HttpCode, Errors } from '../utils/constants';
import { BadRequest, Unauthorized } from '../models/errors';
import { IUser, Users } from '../models/users';
import jwt from '../models/jwt';
import Common from '../utils/common';
import asyncHandler from 'express-async-handler';

/**
 * Handles loging in user
 * 
 * @param req request
 * @param res response
 */
const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!Common.isNotEmpty(username) && !Common.isNotEmpty(password)) {
        throw new BadRequest({ message: Errors.LOGIN_REQUIRED });
    }

    const user = await Users.findOne({ username });

    if (!user || !await Common.hashVerified(password, user.password)) {
        throw new BadRequest({ message: Errors.BAD_LOGIN });
    }

    const response = new jwt(
        await Common.generateJwt(user._id),
        await Common.generateJwt(user._id, true)
    );

    res.status(HttpCode.OK).json(response.json());
});

/**
 * Handles refreshing token for a user
 * 
 * @param req request
 * @param res response
 */
const refreshToken = asyncHandler(async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];
    const verifiedToken = await Common.verifyJwt(token as string) as any;

    if (!verifiedToken.isRefreshtoken) {
        throw new Unauthorized({ message: Errors.JWT_INVALID_REFRESH });
    }

    const response = new jwt(
        await Common.generateJwt(verifiedToken.__id),
        token as string
    );

    res.status(HttpCode.OK).json(response.json());
});

const verifyToken = asyncHandler(async (req: Request, res: Response) => {
    res.status(HttpCode.OK).json({
        isVerified: true
    });
});

export { loginUser, refreshToken, verifyToken };