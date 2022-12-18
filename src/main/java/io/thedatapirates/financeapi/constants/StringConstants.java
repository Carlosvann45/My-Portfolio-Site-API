package io.thedatapirates.financeapi.constants;

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
    public static final String LOG_GET_USER = "Request received for getUser.";
    public static final String LOG_REFRESH_USER_TOKEN = "Request received for refreshUserToken.";


    // Error Messages
    public static final String USER_NOT_FOUND = "User with given username does not exist.";
    public static final String INVALID_LOGIN = "Invalid Credentials. Please try again.";
    public static final String BAD_TOKEN = "Invalid token.";
    public static final String EMAIL_MISMATCH = "Email in pathway does not match username from token";
    public static final String JWT_ERROR_BEGINNING = "Jwt token error: ";
    public static final String ERROR_BEGINNING = "Jwt token Error: ";
    public static final String JWT_CREDENTIAL_BEGINNING = "Bad credentials error: ";
    public static final String EMAIL_NULL = "Email is a required field.";
    public static final String BAD_EMAIL = "Email must follow proper email format: example123@abc.com";
    public static final String PASSWORD_NULL = "Password for customer can not be null or empty.";
    public static final String PASSWORD_BAD_SIZE = "Password must be between 8 and 20 characters long.";
    public static final String FIRST_NAME_NULL = "First name for customer can not be null or empty.";
    public static final String LAST_NAME_NULL = "Last name for customer can not be null or empty.";

    // Misc
    public static final String EMPTY_STRING = " ";
    public static final String STAR = "*";
    public static final String ID = "id";
    public static final String EXCEPTION_RESOLVER = "handlerExceptionResolver";

    // Email Templates

}
