"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.NotFound = exports.Unauthorized = exports.BadRequest = void 0;
const constants_1 = require("../utils/constants");
class DefaultError extends Error {
    constructor() {
        super(...arguments);
        this.httpStatus = constants_1.HttpCode.INTERNAL_SERVER_ERROR;
        this.name = constants_1.HttpName.INTERNAL_SERVER_ERROR;
        this.isOperational = true;
    }
    json() {
        return {
            status: this.httpStatus,
            name: this.name,
            message: this.message,
        };
    }
}
/**
 * Error class to represent bad requests
 */
class BadRequest extends DefaultError {
    constructor(args) {
        super(args.message);
        this.httpStatus = constants_1.HttpCode.BAD_REQUEST;
        this.name = constants_1.HttpName.BAD_REQUEST;
        Object.setPrototypeOf(this, new.target.prototype);
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.BadRequest = BadRequest;
/**
 * Error class to represent unauthorized requests
 */
class Unauthorized extends DefaultError {
    constructor(args) {
        super(args.message);
        this.httpStatus = constants_1.HttpCode.UNAUTHORIZED;
        this.name = constants_1.HttpName.UNAUTHORIZED;
        Object.setPrototypeOf(this, new.target.prototype);
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.Unauthorized = Unauthorized;
/**
 * Error class to represent not found requests
 */
class NotFound extends DefaultError {
    constructor(args) {
        super(args.message);
        this.httpStatus = constants_1.HttpCode.NOT_FOUND;
        this.name = constants_1.HttpName.NOT_FOUND;
        Object.setPrototypeOf(this, new.target.prototype);
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.NotFound = NotFound;
/**
 * Error class to represent internal error requests
 */
class InternalServerError extends DefaultError {
    constructor(args) {
        super(args.message);
        this.httpStatus = constants_1.HttpCode.INTERNAL_SERVER_ERROR;
        this.name = constants_1.HttpName.INTERNAL_SERVER_ERROR;
        Object.setPrototypeOf(this, new.target.prototype);
        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }
        Error.captureStackTrace(this);
    }
}
exports.InternalServerError = InternalServerError;
