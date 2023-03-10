package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.jwts.JwtResponse;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import io.myportfolioproject.api.exceptions.Unauthorized;
import io.myportfolioproject.api.utility.JWTUtility;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;

/**
 * A class to implement all methods from the admin service interface
 */
@Service
public class AdminServiceImpl implements AdminService, UserDetailsService {
    private final Logger logger = LogManager.getLogger(AdminServiceImpl.class);

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AdminRepository adminRepository;

    /**
     * Validates refresh token and generates new access token
     *
     * @param refreshToken refresh token to validate
     * @param url          url to use for access token creation
     * @return Jwt response with access/refresher tokens
     */
    @Override
    public JwtResponse refreshAdminToken(String refreshToken, String url) {
        String token = null;
        String username = null;

        if (refreshToken.startsWith(StringConstants.BEARER_BEGINNING)) {
            token = refreshToken.substring(7).trim();

            try {
                username = jwtUtility.getUsernameFromToken(token);
            } catch (Exception e) {
                logger.error(StringConstants.JWT_ERROR_BEGINNING.concat(e.getMessage()));

                throw new Unauthorized(StringConstants.BAD_TOKEN);
            }

            if (username != null) {
                UserDetails userDetails = loadUserByUsername(username);

                boolean validToken = false;

                try {
                    validToken = jwtUtility.validateToken(token, userDetails);
                } catch (Exception e) {
                    logger.error(StringConstants.JWT_ERROR_BEGINNING.concat(e.getMessage()));

                    throw new Unauthorized(StringConstants.BAD_TOKEN);
                }

                if (validToken) {
                    return new JwtResponse(jwtUtility.generateToken(userDetails, url), token);
                }
            }
        }

        throw new Unauthorized(StringConstants.BAD_TOKEN);
    }

    /**
     * Loads a admin by a given username
     *
     * @param username username to search for
     * @return User details based from username
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin;

        try {
            admin = adminRepository.findAdminByUsername(username);
        } catch (DataAccessException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }

        if (admin == null) {
            admin = new Admin();

            admin.setUsername(StringConstants.EMPTY_STRING);
            admin.setPassword(StringConstants.EMPTY_STRING);
        }

        return new User(admin.getUsername(), admin.getPassword(), new ArrayList<>());
    }
}
