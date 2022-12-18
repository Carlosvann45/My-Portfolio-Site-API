package io.thedatapirates.financeapi.domains.customers;

import io.thedatapirates.financeapi.domains.jwts.JwtResponse;

/**
 * Interface class provides abstraction layer for customer service
 */
public interface UserService {

    User getUser(String email, String token);

    JwtResponse refreshUserToken(String refreshToken, String url);
}
