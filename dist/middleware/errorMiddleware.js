"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const errors_1 = require("../models/errors");
/**
 * checks if error is a code based one
 *
 * @param err error to check
 * @returns boolean
 */
const isTrustedError = (err) => {
    if (err instanceof errors_1.BadRequest || err instanceof errors_1.Unauthorized || err instanceof errors_1.NotFound || err instanceof errors_1.InternalServerError) {
        return err.isOperational;
    }
    return false;
};
/**
 * Handles error response for app generated errors
 *
 * @param err error to handle
 * @param response response
 */
const handleTrustedError = (err, response) => {
    response.status(err.httpStatus).json(err.json());
};
/**
 * Handles unexpected errors from api
 *
 * @param err error to handle
 * @param response response
 */
const handleCriticalError = (err, response) => {
    if (response) {
        response
            .status(constants_1.HttpCode.INTERNAL_SERVER_ERROR)
            .json({ name: constants_1.HttpName.INTERNAL_SERVER_ERROR, message: constants_1.Errors.APP_ERROR });
    }
    console.log(err);
    console.log(constants_1.Errors.APP_ERROR);
};
/**
 * Handles errors thrown in router
 *
 * @param err error to handle
 * @param req request
 * @param res response
 * @param next next function
 */
const errorHandler = (err, req, res, next) => {
    if (isTrustedError(err) && res) {
        handleTrustedError(err, res);
    }
    else {
        handleCriticalError(err, res);
    }
};
exports.default = errorHandler;
