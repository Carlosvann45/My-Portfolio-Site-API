package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.domains.jwts.JwtResponse;

/**
 * Interface class provides abstraction layer for admin service
 */
public interface AdminService {
    JwtResponse refreshAdminToken(String refreshToken, String url);
}
