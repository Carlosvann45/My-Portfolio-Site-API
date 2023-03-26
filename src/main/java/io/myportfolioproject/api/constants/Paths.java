package io.myportfolioproject.api.constants;

/**
 * Constant variables for api paths
 */
public class Paths {

    // Description
    public static final String DESCRIPTION = "/descriptions";
    public static final String DESCRIPTION_CREATE = "/experience_id/{id}";
    public static final String DESCRIPTION_UPDATE = "/{id}/experience_id/{experienceId}";

    // Contacts
    public static final String CONTACTS = "/contacts";
    public static final String CONTACT_EMAIL = "/contact_email/{email}";

    // Requests
    public static final String REQUESTS = "/requests";

    // Emails
    public static final String EMAIL = "/emails";

    // Experience
    public static final String EXPERIENCE = "/experiences";

    // Admin
    public static final String ADMIN = "/admin";
    public static final String LOGIN = "/admin/login";
    public static final String REFRESH_TOKEN = "/refresh_token";

    // Misc
    public static final String ALL_EXTENSIONS = "/**";
    public static final String ID = "/{id}";
    public static final String POST = "/post";
}
