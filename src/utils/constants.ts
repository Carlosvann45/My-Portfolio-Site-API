/**
 * Route constants
 */
export class Routes {
    private static DEFAULT_ROUTE = '/api';
    public static  PROJECT_ROUTE = `${this.DEFAULT_ROUTE}/projects`;
    public static  PROJECT_ID_ROUTE = `${this.PROJECT_ROUTE}/:id`;
    public static  EXPERINCE_ROUTE = `${this.DEFAULT_ROUTE}/experinces`;
    public static  EXPERINCE_ID_ROUTE = `${this.EXPERINCE_ROUTE}/:id`;
}

/**
 * Regex constants
 */
export class Regex {
    public static LINK = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i;
    public static DATE = /((0[13578]|1[02])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](18|19|20)[0-9]{2})|((0[469]|11)[\/.](0[1-9]|[12][0-9]|30)[\/.](18|19|20)[0-9]{2})|((02)[\/.](0[1-9]|1[0-9]|2[0-8])[\/.](18|19|20)[0-9]{2})|((02)[\/.]29[\/.](((18|19|20)(04|08|[2468][048]|[13579][26]))|2000))/;
}

/**
 * Error constants
 */
export class Errors {
    public static PROJECT_REQUIRED = 'All fields in project are required and links must be valid.';
    public static PROJECT_NOT_FOUND = 'Project with given id does not exists.';
    public static EXPERINCE_REQUIRED = 'All fields in experince are required except endDate.';
    public static EXPERINCE_DATES = 'Date fields in experince must match format: mm/dd/yyyy';
    public static EXPERINCE_NOT_FOUND = 'Experince with given id does not exists.';
}

/**
 * HttpCode constants
 */
export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }

  /**
   * HttpName constants
   */
  export enum HttpName {
    BAD_REQUEST = 'Bad Request',
    UNAUTHORIZED = 'Unauthorized',
    NOT_FOUND = 'Not found',
    INTERNAL_SERVER_ERROR = 'Internal Server Error',
  }