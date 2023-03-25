package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.domains.jwts.JwtResponse;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import io.myportfolioproject.api.exceptions.Unauthorized;

/**
 * Interface class provides abstraction layer for admin service
 */
public interface AdminService {

    /**
     * Validates refresh token and generates new access token
     *
     * @param refreshToken refresh token to validate
     * @param url          url to use for access token creation
     * @throws ServerUnavailable if there is a database issue
     * @throws Unauthorized      if there is an issue authenticating token
     * @return Jwt response with access/refresher tokens
     */
    JwtResponse refreshAdminToken(String refreshToken, String url);

    /**
     * Helper method: Retrieves admin from token
     *
     * @param token token to get admin from
     * @throws ServerUnavailable if there is a database issue
     * @throws NotFound if admin doesn't exist
     */
    void adminExistFromToken(String token);
}
