package io.myportfolioproject.api.data;

import io.myportfolioproject.api.domains.admin.Admin;
import io.myportfolioproject.api.domains.admin.AdminRepository;
import io.myportfolioproject.api.domains.descriptions.Description;
import io.myportfolioproject.api.domains.descriptions.DescriptionRepository;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * This class handles Seeding selected data into the database depending on the application.yml
 */
@Component
public class SeedData implements CommandLineRunner {

    private final Logger logger = LogManager.getLogger(SeedData.class);

    @Autowired
    private DescriptionRepository descriptionRepository;

    @Autowired
    private ExperienceRepository experienceRepository;

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

        Admin admin_1 = new Admin();

        admin_1.setDateCreated(LocalDateTime.now());
        admin_1.setDateUpdated(LocalDateTime.now());
        admin_1.setUsername(username);
        admin_1.setPassword(passwordEncoder.encode(password));

        adminRepository.save(admin_1);

        logger.info("Loading Experience data...");

        List<String> sd2Descriptions = new ArrayList<>();
        sd2Descriptions.add("I worked with T. Rowe Price's corporate team to utilize AEM(Adobe Experience Manager) to manage the company's main corporate website. I  used languages like JavaScript, Jquery, CSS, HTML, and Java to help manage the website's front-end and back-end.");
        sd2Descriptions.add("I worked with T. Rowe Price's enterprise team that utilized TypeScript, Lit, and ViTest to manage, build, and test web components that followed AA ADA compliance to meet accessibility requirements and used across multiple teams at T. Rowe Price.");
        sd2Descriptions.add("I worked with multiple T. Rowe Price teams to maintain their GitLab pipelines that publish to the company's Artifactory instance. I also helped ensure the repository code met the correct code quality, test coverage, and security risk requirements.");

        List<String> sd1Descriptions = new ArrayList<>();
        sd1Descriptions.add("Led multiple teams of 9 to 11 associates building a sporting goods e-commerce application using Agile Scrum methodology, ReactJS, and C# .Net Framework.");
        sd1Descriptions.add("Organized and planned the team's Backlog Refinements, Sprint Planning, Technical discussion, Sprint Presentations, and meetings for transferring knowledge to associates for React JS and C# .Net Framework.");
        sd1Descriptions.add("Worked on the Training Team Jira board and completed cards such as creating trainer solutions for modules, creating full-stack practice projects for associates, and helping maintain training team repositories using Java, Spring Boot, C#, .Net Framework, and React JS.");

        List<String> apprenticeDescriptions = new ArrayList<>();
        apprenticeDescriptions.add("Java E-Commerce API with Spring and Spring Security - Contributed to a team of 9 to build a sporting goods e-commerce application using Agile Scrum methodology, React, Jest unit testing, and Cypress E2E testing.");
        apprenticeDescriptions.add("React Hotel Reservation Front-End - Followed UX/UI best practices to build an intuitive ReactJS front-end single page application for managing hotel reservations.");
        apprenticeDescriptions.add("Health Clinic Application - Built React front-end and Spring Boot back-end for N-Tier architecture application designed to help health clinic employees keep track of patients and appointments.");

        Experience catalyteSd2 = new Experience();
        catalyteSd2.setDateCreated(LocalDateTime.now());
        catalyteSd2.setDateUpdated(LocalDateTime.now());
        catalyteSd2.setCompany("Catalyte");
        catalyteSd2.setPosition("Software Developer 2 - T. Rowe Price");
        catalyteSd2.setStartDate("01/2023");
        catalyteSd2.setEndDate("Present");

        Experience catalyteSd1 = new Experience();
        catalyteSd1.setDateCreated(LocalDateTime.now());
        catalyteSd1.setDateUpdated(LocalDateTime.now());
        catalyteSd1.setCompany("Catalyte");
        catalyteSd1.setPosition("Software Developer 1");
        catalyteSd1.setStartDate("01/2022");
        catalyteSd1.setEndDate("01/2023");

        Experience catalyteApprentice = new Experience();
        catalyteApprentice.setDateCreated(LocalDateTime.now());
        catalyteApprentice.setDateUpdated(LocalDateTime.now());
        catalyteApprentice.setCompany("Catalyte");
        catalyteApprentice.setPosition("Apprentice Software Developer");
        catalyteApprentice.setStartDate("08/2022");
        catalyteApprentice.setEndDate("01/2022");

        final Experience apprentice  = experienceRepository.save(catalyteApprentice);
        final Experience sd1 = experienceRepository.save(catalyteSd1);
        final Experience sd2 = experienceRepository.save(catalyteSd2);

        logger.info("Loading Description data...");

        apprenticeDescriptions.forEach((description) -> {
            Description newdescription = new Description();
            newdescription.setDateCreated(LocalDateTime.now());
            newdescription.setDateUpdated(LocalDateTime.now());
            newdescription.setDescription(description);
            newdescription.setExperience(apprentice);
            descriptionRepository.save(newdescription);
        });

        sd1Descriptions.forEach((description) -> {
            Description newdescription = new Description();
            newdescription.setDateCreated(LocalDateTime.now());
            newdescription.setDateUpdated(LocalDateTime.now());
            newdescription.setDescription(description);
            newdescription.setExperience(sd1);
            descriptionRepository.save(newdescription);
        });

        sd2Descriptions.forEach((description) -> {
            Description newdescription = new Description();
            newdescription.setDateCreated(LocalDateTime.now());
            newdescription.setDateUpdated(LocalDateTime.now());
            newdescription.setDescription(description);
            newdescription.setExperience(sd2);
            descriptionRepository.save(newdescription);
        });

        logger.info("Data load is complete. You can now make request.");
    }
}
