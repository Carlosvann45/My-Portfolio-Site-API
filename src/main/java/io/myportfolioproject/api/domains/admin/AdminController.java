package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.jwts.JwtResponse;
import io.myportfolioproject.api.utility.MapperExtensions;
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
 * Controller for admin endpoints
 */
@RestController
@RequestMapping(value = Paths.ADMIN)
@ExtensionMethod(MapperExtensions.class)
public class AdminController {
    private final Logger logger = LogManager.getLogger(AdminController.class);

    @Autowired
    private AdminService adminService;

    /**
     * Creates a new Jwt token if refresh token is valid
     *
     * @param refreshToken refresh token to check
     * @return new jwt response with new access and original refresh token
     */
    @GetMapping(Paths.REFRESH_TOKEN)
    public ResponseEntity<JwtResponse> refreshAdminToken(
            @RequestHeader(AUTHORIZATION) String refreshToken, HttpServletRequest request
    ) {
        logger.info(StringConstants.LOG_REFRESH_ADMIN_TOKEN);

        JwtResponse jwtResponse = adminService.refreshAdminToken(
                refreshToken, request.getRequestURL().toString()
        );

        return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
    }
}
