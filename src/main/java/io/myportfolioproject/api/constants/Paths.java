package io.myportfolioproject.api.constants;

/**
 * Constant variables for api paths
 */
public class Paths {

    // Description
    public static final String DESCRIPTION = "/descriptions";
    public static final String DESCRIPTION_CREATE = "/experience_id/{id}";

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
