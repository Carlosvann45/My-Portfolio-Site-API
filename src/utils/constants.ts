/**
 * Route constants
 */
export class Routes {
    private static DEFAULT_ROUTE = '/api';
    private static USER_DEFAULT = `${this.DEFAULT_ROUTE}/users`;
    public static ALL_ROUTE = '*';
    public static PROJECT_ROUTE = `${this.DEFAULT_ROUTE}/projects`;
    public static PROJECT_ID_ROUTE = `${this.PROJECT_ROUTE}/:id`;
    public static EXPERINCE_ROUTE = `${this.DEFAULT_ROUTE}/experinces`;
    public static EXPERINCE_ID_ROUTE = `${this.EXPERINCE_ROUTE}/:id`;
    public static TECH_ROUTE = `${this.DEFAULT_ROUTE}/technologies`;
    public static TECH_ID_ROUTE = `${this.TECH_ROUTE}/:id`;
    public static LOGIN_ROUTE = `${this.USER_DEFAULT}/login`;
    public static TOKEN_ROUTE = `${this.USER_DEFAULT}/refresh_token`;
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
    public static TECH_REQUIRED = 'All fields in technology are required and links must be valid.';
    public static TECH_NOT_FOUND = 'Technology with given id does not exists.';
    public static ROUTE_NOT_FOUND = 'The given route does not exists.';
    public static APP_ERROR = 'Application encountered a critical error';
    public static JWT_INVALID = 'Invalid token.'
    public static JWT_INVALID_NO_TOKEN = 'Invalid token, no token.';
    public static JWT_INVALID_REFRESH = 'Invalid refresh token.';
    public static LOGIN_REQUIRED = 'Username and password are required';
    public static BAD_LOGIN = 'Invalid login credentials.';
}

export class Misc {
    public static BEARER = 'Bearer';
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
