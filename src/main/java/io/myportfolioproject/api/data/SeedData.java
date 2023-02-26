package io.myportfolioproject.api.data;

import io.myportfolioproject.api.domains.admin.Admin;
import io.myportfolioproject.api.domains.admin.AdminRepository;
import io.myportfolioproject.api.domains.experiences.ExperienceRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * This class handles Seeding selected data into the database depending on the application.yml
 */
@Component
public class SeedData implements CommandLineRunner {

    private final Logger logger = LogManager.getLogger(SeedData.class);

    @Autowired
    private ExperienceRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private Environment env;

    /**
     * This code gets called when the api started to check if we should load data into the database
     *
     * @param strings string arguments
     */
    @Override
    public void run(String... strings) {
        seedDatabase();
    }

    /**
     * Seeds database into the repositories with randomly generated data
     */
    private void seedDatabase() {
        String username = env.getProperty("admin.username");
        String password = env.getProperty("admin.password");

        // Persist data to database
        logger.info("Loading Admin data...");

        Admin admin_1 = new Admin(username, passwordEncoder.encode(password));

        adminRepository.save(admin_1);

        logger.info("Loading Experience data");

        logger.info("Data load is complete. You can now make request.");
    }
}
