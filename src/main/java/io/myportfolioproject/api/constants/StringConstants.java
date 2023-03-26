package io.myportfolioproject.api.constants;

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
    public static final String TOO_MANY_REQUESTS = "429 Too Many Requests";

    // Logger
    public static final String LOG_GET_EXPERIENCE = "Request received for getExperiences.";
    public static final String LOG_POST_EXPERIENCE = "Request received for createExperience.";
    public static final String LOG_PUT_EXPERIENCE = "Request received for updateExperience.";
    public static final String LOG_DELETE_EXPERIENCE = "Request received for deleteExperience.";
    public static final String LOG_POST_DESCRIPTION = "Request received for createDescription.";
    public static final String LOG_PUT_DESCRIPTION = "Request received for updateDescription.";
    public static final String LOG_DELETE_DESCRIPTION = "Request received for deleteDescription.";
    public static final String LOG_REFRESH_ADMIN_TOKEN = "Request received for refreshAdminToken.";
    public static final String LOG_GET_CONTACT = "Request received for getContacts.";
    public static final String LOG_POST_CONTACT = "Request received for createContact.";
    public static final String LOG_POST_REQUEST = "Request received for createRequest.";

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
    public static final String EXPERIENCE_NOT_FOUND = "Experience with given id does not exist.";
    public static final String DESCRIPTION_NOT_FOUND = "Description with given id does not exist.";
    public static final String DESCRIPTION_LENGTH_ERROR = "Description length must be between 50 and 255 characters.";
    public static final String INCORRECT_PATH_ID = "Path id does not match given entity id.";
    public static final String EMAIL_REQUIRED = "Email is a required field.";
    public static final String EMAIL_VALID_FORMAT = "Email must be a valid format. (e.g. example@gmail.com)";
    public static final String SUBJECT_LENGTH_REQ = "Subject length must be between 15 to 50 characters.";
    public static final String BODY_LENGTH_REQ = "Body length must be between 50 to 255 characters.";
    public static final String CONTACT_EMAIL_NOT_FOUND = "Contact with given email does not exist.";
    public static final String CONTACT_EXIST = "Contact with given email already exists.";
    public static final String TOO_MANY_CONTACT_REQUEST_TODAY = "You have already sent two contact request today. Please try again tomorrow.";

    // Misc
    public static final String STAR = "*";
    public static final String EMPTY_STRING = " ";
    public static final String WEBSITE_URL = "http://localhost:3000";
    public static final String EXPERIENCE = "experience";
    public static final String EXPERIENCE_ID = "experience_id";
    public static final String EXCEPTION_RESOLVER = "handlerExceptionResolver";
    public static final String CONTACT = "contact";
    public static final String CONTACT_ID = "contact_id";

    // Email Templates

}
