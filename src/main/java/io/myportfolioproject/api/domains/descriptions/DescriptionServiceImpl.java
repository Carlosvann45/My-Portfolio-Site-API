package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.domains.admin.AdminServiceImpl;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceRepository;
import io.myportfolioproject.api.domains.experiences.ExperienceServiceImpl;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;

/**
 * A service implementation for experience business logic
 */
@Service
public class DescriptionServiceImpl implements DescriptionService {

    private final Logger logger = LogManager.getLogger(ExperienceServiceImpl.class);

    @Autowired
    private AdminServiceImpl adminService;

    @Autowired
    private ExperienceRepository experienceRepository;

    @Autowired
    private DescriptionRepository descriptionRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public Description createDescription(String token, Long id, Description description) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        try {
            Experience existingExperience;

            existingExperience = experienceRepository.getById(id);

            description.setDateCreated(LocalDateTime.now());
            description.setDateUpdated(LocalDateTime.now());
            description.setExperience(existingExperience);

            return descriptionRepository.save(description);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        }  catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteDescription(String token, Long id) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        Description existingDescription;

        try {
            existingDescription = descriptionRepository.getById(id);

            descriptionRepository.delete(existingDescription);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }
}
