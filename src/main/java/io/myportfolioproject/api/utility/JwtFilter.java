package io.myportfolioproject.api.utility;


import io.micrometer.core.lang.NonNullApi;
import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.admin.AdminServiceImpl;
import io.myportfolioproject.api.exceptions.Unauthorized;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

import static org.apache.http.HttpHeaders.AUTHORIZATION;

/**
 * Class used for filtering through header Jwt tokens when request come through
 */

@NonNullApi
@Component
public class JwtFilter extends OncePerRequestFilter {

    private final Logger logger = LogManager.getLogger(JwtFilter.class);

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AdminServiceImpl adminService;

    @Autowired
    @Qualifier(StringConstants.EXCEPTION_RESOLVER)
    private HandlerExceptionResolver resolver;


    /**
     * Handles validating any jwt bearer tokens passed through the authorization header
     *
     * @param request     request to validate authorization header
     * @param response    servlet response
     * @param filterChain filter chain to pass to after validation
     */
    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    ) throws ServletException, IOException {
        String url = request.getServletPath();
        String[] pathArray = new String[]{
                Paths.ADMIN.concat(Paths.REFRESH_TOKEN),
                Paths.EXPERIENCE,
                Paths.LOGIN
        };

        try {
            if (Arrays.stream(pathArray).noneMatch(url::contains)) {
                String authorization = request.getHeader(AUTHORIZATION);
                String token = null;
                String username = null;

                if (authorization != null && authorization.startsWith(StringConstants.BEARER_BEGINNING)) {
                    token = authorization.substring(7).trim();

                    try {
                        username = jwtUtility.getUsernameFromToken(token);
                    } catch (Exception e) {
                        logger.error(StringConstants.JWT_ERROR_BEGINNING.concat(e.getMessage()));

                        throw new Unauthorized(StringConstants.BAD_TOKEN);
                    }
                }

                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = adminService.loadUserByUsername(username);

                    boolean validToken = false;

                    try {
                        validToken = jwtUtility.validateToken(token, userDetails);
                    } catch (Exception e) {
                        logger.error(StringConstants.JWT_ERROR_BEGINNING.concat(e.getMessage()));

                        throw new Unauthorized(StringConstants.BAD_TOKEN);
                    }

                    if (validToken) {
                        UsernamePasswordAuthenticationToken AuthToken =
                                new UsernamePasswordAuthenticationToken(
                                        userDetails, null, userDetails.getAuthorities()
                                );

                        AuthToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                        SecurityContextHolder.getContext().setAuthentication(AuthToken);
                    } else {
                        throw new Unauthorized(StringConstants.BAD_TOKEN);
                    }
                }
            }

            filterChain.doFilter(request, response);
        } catch (Exception e) {
            logger.error(StringConstants.JWT_ERROR_BEGINNING.concat(e.getMessage()));

            resolver.resolveException(request, response, null, e);
        }
    }
}
