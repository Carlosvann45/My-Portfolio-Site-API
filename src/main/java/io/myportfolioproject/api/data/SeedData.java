package io.myportfolioproject.api.data;

import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceRepository;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * This class handles Seeding selected data into the database depending on the application.yml
 */
@Component
public class SeedData implements CommandLineRunner {

    private final Logger logger = LogManager.getLogger(SeedData.class);

    @Autowired
    private ExperienceRepository userRepository;

    @Autowired
    private Environment env;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * This code gets called when the api started to check if we should load data into the database
     *
     * @param strings string arguments
     */
    @Override
    public void run(String... strings) {
        boolean loadData;

        try {
            // retrieves the value of custom property in application.yml
            loadData = Boolean.parseBoolean(env.getProperty("customers.load"));
        } catch (NumberFormatException ex) {
            logger.error("config variable loadData could not be parsed, falling back to default");
            loadData = true;
        }

        if (loadData) {
            seedDatabase();
        }
    }

    /**
     * Seeds database into the repositories with randomly generated data
     */
    private void seedDatabase() {

        // Persist data to database
        logger.info("Loading data...");

        logger.info("Data load is complete. You can now make request.");
    }
}
