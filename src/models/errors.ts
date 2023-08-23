import { HttpCode, HttpName } from '../utils/constants';

/**
 * INterface for error class arguments
 */
interface ErrorArgs {
    message: string,
    isOperational?: boolean;
}

/**
 * Error class to represent bad requests
 */
export class BadRequest extends Error {
    public readonly httpStatus = HttpCode.BAD_REQUEST;
    public readonly name = HttpName.BAD_REQUEST;
    public readonly isOperational: boolean = true;

    constructor(args: ErrorArgs) {
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

        Error.captureStackTrace(this);
    }

    json() {
        return {
            name: this.name,
            status: this.httpStatus,
            message: this.message
        }
    }
}

/**
 * Error class to represent unauthorized requests
 */
export class Unauthorized extends Error {
    public readonly httpStatus = HttpCode.UNAUTHORIZED;
    public readonly name = HttpName.UNAUTHORIZED;
    public readonly isOperational: boolean = true;

    constructor(args: ErrorArgs) {
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

        Error.captureStackTrace(this);
    }

    json() {
        return {
            name: this.name,
            status: this.httpStatus,
            message: this.message
        }
    }
}

/**
 * Error class to represent not found requests
 */
export class NotFound extends Error {
    public readonly httpStatus = HttpCode.NOT_FOUND;
    public readonly name = HttpName.NOT_FOUND;
    public readonly isOperational: boolean = true;

    constructor(args: ErrorArgs) {
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

        Error.captureStackTrace(this);
    }

    json() {
        return {
            name: this.name,
            status: this.httpStatus,
            message: this.message
        }
    }
}

/**
 * Error class to represent internal error requests
 */
export class InternalServerError extends Error {
    public readonly httpStatus = HttpCode.INTERNAL_SERVER_ERROR;
    public readonly name = HttpName.INTERNAL_SERVER_ERROR;
    public readonly isOperational: boolean = true;

    constructor(args: ErrorArgs) {
        super(args.message);

        Object.setPrototypeOf(this, new.target.prototype);

        if (args.isOperational !== undefined) {
            this.isOperational = args.isOperational;
        }

        Error.captureStackTrace(this);
    }

    json() {
        return {
            name: this.name,
            status: this.httpStatus,
            message: this.message
        }
    }
}