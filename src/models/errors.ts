import { HttpCode, HttpName } from "../utils/constants";

/**
 * INterface for error class arguments
 */
interface ErrorArgs {
  message: string;
  isOperational?: boolean;
}

class DefaultError extends Error {
  public httpStatus: HttpCode = HttpCode.INTERNAL_SERVER_ERROR;
  public name: HttpName = HttpName.INTERNAL_SERVER_ERROR;
  public isOperational: boolean = true;

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
export class BadRequest extends DefaultError {
  constructor(args: ErrorArgs) {
    super(args.message);
    this.httpStatus = HttpCode.BAD_REQUEST;
    this.name = HttpName.BAD_REQUEST;

    Object.setPrototypeOf(this, new.target.prototype);

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

/**
 * Error class to represent unauthorized requests
 */
export class Unauthorized extends DefaultError {
  constructor(args: ErrorArgs) {
    super(args.message);
    this.httpStatus = HttpCode.UNAUTHORIZED;
    this.name = HttpName.UNAUTHORIZED;

    Object.setPrototypeOf(this, new.target.prototype);

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

/**
 * Error class to represent not found requests
 */
export class NotFound extends DefaultError {
  constructor(args: ErrorArgs) {
    super(args.message);
    this.httpStatus = HttpCode.NOT_FOUND;
    this.name = HttpName.NOT_FOUND;

    Object.setPrototypeOf(this, new.target.prototype);

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}

/**
 * Error class to represent internal error requests
 */
export class InternalServerError extends DefaultError {
  constructor(args: ErrorArgs) {
    super(args.message);
    this.httpStatus = HttpCode.INTERNAL_SERVER_ERROR;
    this.name = HttpName.INTERNAL_SERVER_ERROR;

    Object.setPrototypeOf(this, new.target.prototype);

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
