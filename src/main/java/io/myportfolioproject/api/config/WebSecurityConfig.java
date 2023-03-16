package io.myportfolioproject.api.config;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.domains.admin.AdminServiceImpl;
import io.myportfolioproject.api.utility.CustomAuthenticationFilter;
import io.myportfolioproject.api.utility.JWTUtility;
import io.myportfolioproject.api.utility.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.google.api.client.http.HttpMethods.GET;

/**
 * Configuration setup for spring boot web security
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AdminServiceImpl adminService;

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private JwtFilter jwtFilter;

    private static final String[] AUTH_WHITELIST = {
            // -- Swagger UI v2
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            // -- Swagger UI v3 (OpenAPI)
            "/v3/api-docs/**",
            "/swagger-ui/**"
    };

    /**
     * Configures Http Security to utilize custom authorization
     *
     * @param security HttpSecurity for configuration
     */
    @Override
    protected void configure(HttpSecurity security) throws Exception {
        CustomAuthenticationFilter customAuthFilter =
                new CustomAuthenticationFilter(authenticationManagerBean(), jwtUtility);

        customAuthFilter.setFilterProcessesUrl(Paths.LOGIN);

        security.csrf().disable();

        security.authorizeRequests()
                .antMatchers(GET, Paths.EXPERIENCE)
                .permitAll();

        security.authorizeRequests()
                .antMatchers(AUTH_WHITELIST)
                .permitAll();

        security.authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        security.addFilter(customAuthFilter);
        security.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    /**
     * Configures Authentication manager builder
     *
     * @param auth authentication manager builder to configure
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(adminService).passwordEncoder(passwordEncoder);
    }

    /**
     * Gets authentication manager
     *
     * @return Authentication manger bean
     */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}

