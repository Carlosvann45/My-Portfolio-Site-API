package io.myportfolioproject.api.constants;

/**
 * A class to represent constant string variables
 */
public class StringConstants {

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
    public static final String LOG_REFRESH_ADMIN_TOKEN = "Request received for refreshAdminToken.";

    // Error Messages
    public static final String INVALID_LOGIN = "Invalid Credentials. Please try again.";
    public static final String BAD_TOKEN = "Invalid token.";
    public static final String JWT_ERROR_BEGINNING = "Jwt token error: ";
    public static final String JWT_CREDENTIAL_BEGINNING = "Bad credentials error: ";

    // Misc
    public static final String STAR = "*";
    public static final String EMPTY_STRING = " ";
    public static final String WEBSITE_URL ="http://localhost:3000";
    public static final String DESCRIPTION = "description";
    public static final String EXPERIENCE_ID = "experience_id";
    public static final String EXCEPTION_RESOLVER = "handlerExceptionResolver";

    // Email Templates

}
