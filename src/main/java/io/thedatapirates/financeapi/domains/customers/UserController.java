package io.thedatapirates.financeapi.domains.customers;

import io.thedatapirates.financeapi.constants.Paths;
import io.thedatapirates.financeapi.constants.StringConstants;
import io.thedatapirates.financeapi.domains.jwts.JwtResponse;
import io.thedatapirates.financeapi.utility.MapperExtensions;
import lombok.experimental.ExtensionMethod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

import static org.apache.http.HttpHeaders.AUTHORIZATION;

/**
 * Controller for customer endpoints
 */
@RestController
@RequestMapping(value = Paths.USERS_PATH)
@ExtensionMethod(MapperExtensions.class)
public class UserController {

    private final Logger logger = LogManager.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    /**
     * Get request to get a user by username
     *
     * @param email username to search for
     * @return a user with the given username
     */
    @GetMapping(Paths.USERNAME_PATH)
    public ResponseEntity<ResponseUserDTO> getUser(
            @RequestHeader(AUTHORIZATION) String token, @PathVariable String email
    ) {
        logger.info(StringConstants.LOG_GET_USER);

        token = token.substring(7).trim();

        User user = userService.getUser(email, token);

        ResponseUserDTO userDTO = user.mapUserToDTO();

        return new ResponseEntity<>(userDTO, HttpStatus.OK);
    }

    /**
     * Creates a new Jwt token if refresh token is valid
     *
     * @param refreshToken refresh token to check
     * @return new jwt response with new access and original refresh token
     */
    @GetMapping(Paths.REFRESH_TOKEN_PATH)
    public ResponseEntity<JwtResponse> refreshUserToken(
            @RequestHeader(AUTHORIZATION) String refreshToken, HttpServletRequest request
    ) {
        logger.info(StringConstants.LOG_REFRESH_USER_TOKEN);

        JwtResponse jwtResponse = userService.refreshUserToken(
                refreshToken, request.getRequestURL().toString()
        );

        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }
}
