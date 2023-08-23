import { Request, Response, NextFunction } from 'express';
import { HttpCode } from '../utils/constants';
import { BadRequest, Unauthorized, NotFound, InternalServerError } from '../models/errors';

/**
 * checks if error is a code based one
 * 
 * @param err error to check
 * @returns boolean
 */
const isTrustedError = (err: any): boolean =>  {
    if (err instanceof BadRequest || err instanceof Unauthorized|| err instanceof NotFound|| err instanceof InternalServerError) {
      return err.isOperational;
    }

    return false;
}

/**
 * Handles error response for app generated errors
 * 
 * @param err error to handle
 * @param response response
 */
const handleTrustedError = (err: BadRequest|Unauthorized|NotFound|InternalServerError, response: Response): void => {
    response.status(err.httpStatus).json({ 
        name: err.name, 
        message: err.message 
    });
}

/**
 * Handles unexpected errors from api
 * 
 * @param err error to handle
 * @param response response
 */
const handleCriticalError = (err: Error|BadRequest|Unauthorized|NotFound|InternalServerError, response?: Response): void => {
    if (response) {
      response
        .status(HttpCode.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
    console.log(err);
    console.log('Application encountered a critical error. Exiting');
    process.exit(1);
}

/**
 * Handles errors thrown in router
 * 
 * @param err error to handle
 * @param req request
 * @param res response
 * @param next next function
 */
const errorHandler = (err: BadRequest|Unauthorized|NotFound|InternalServerError|Error, req: Request, res: Response, next: NextFunction) => {
    if (isTrustedError(err) && res) {
        handleTrustedError(err as BadRequest|Unauthorized|NotFound|InternalServerError, res);
      } else {
        handleCriticalError(err, res);
      }
};


export default errorHandler;