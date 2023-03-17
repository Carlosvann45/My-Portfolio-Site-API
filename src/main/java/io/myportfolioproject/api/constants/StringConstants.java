package io.myportfolioproject.api.constants;

import java.util.regex.Pattern;

/**
 * A class to represent constant string variables
 */
public class StringConstants {

    // Regex
    public static final String DATE_REGEX = "^((0[1-9])|(1[0-2]))\\/((19[0-9][0-9])|(20[0-2][0-9]))$";

    // JWT
    public static final String BEARER_BEGINNING = "Bearer ";
    public static final String USERNAME_PARAM_NAME = "username";
    public static final String PASSWORD_PARAM_NAME = "password";

    // Exceptions
    public static final String SERVICE_UNAVAILABLE = "503 Service Unavailable";
    public static final String BAD_REQUEST = "400 Bad Request";
    public static final String NOT_FOUND = "404 Not Found";
    public static final String CONFLICT = "409 Conflict";
    public static final String UNAUTHORIZED = "401 Unauthorized";

    // Logger
    public static final String LOG_GET_EXPERIENCE = "Request received for getExperience.";
    public static final String LOG_POST_EXPERIENCE = "Request received for createExperience.";
    public static final String LOG_PUT_EXPERIENCE = "Request received for updateExperience.";
    public static final String LOG_DELETE_EXPERIENCE = "Request received for deleteExperience.";
    public static final String LOG_REFRESH_ADMIN_TOKEN = "Request received for refreshAdminToken.";

    // Error Messages
    public static final String INVALID_LOGIN = "Invalid Credentials. Please try again.";
    public static final String BAD_TOKEN = "Invalid token.";
    public static final String JWT_ERROR_BEGINNING = "Jwt token error: ";
    public static final String JWT_CREDENTIAL_BEGINNING = "Bad credentials error: ";
    public static final String COMPANY_REQUIRED = "Company is a required field.";
    public static final String COMPANY_MIN_LEN = "Company must be at least two characters long.";
    public static final String POSITION_REQUIRED = "Position is a required field.";
    public static final String POSITION_MIN_LEN = "Position must be at least two characters long.";
    public static final String CURRENT_REQUIRED = "Current is a required field.";
    public static final String ADMIN_NOT_FOUND = "Admin with given username does not exist.";
    public static final String DESCRIPTION_LENGTH_ERROR = "Description length must be between 50 and 255 characters.";
    public static final String DESCRIPTION_ID_REQ = "Description id is required to update a experience.";
    public static final String INCORRECT_PATH_ID = "Path id does not match given entity id.";

    // Misc
    public static final String STAR = "*";
    public static final String EMPTY_STRING = " ";
    public static final String WEBSITE_URL ="http://localhost:3000";
    public static final String DESCRIPTION = "description";
    public static final String EXPERIENCE = "experience";
    public static final String EXPERIENCE_ID = "experience_id";
    public static final String EXCEPTION_RESOLVER = "handlerExceptionResolver";

    // Email Templates

}
