package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.admin.AdminService;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceRepository;
import io.myportfolioproject.api.domains.experiences.ExperienceServiceImpl;
import io.myportfolioproject.api.exceptions.BadRequest;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDateTime;
import java.util.Objects;

/**
 * A service implementation for experience business logic
 */
@Service
public class DescriptionServiceImpl implements DescriptionService {

    private final Logger logger = LogManager.getLogger(ExperienceServiceImpl.class);

    @Autowired
    private AdminService adminService;

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

            existingExperience = experienceRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.EXPERIENCE_NOT_FOUND));

            description.setDateCreated(LocalDateTime.now());
            description.setDateUpdated(LocalDateTime.now());
            description.setExperience(existingExperience);

            return descriptionRepository.save(description);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Description updateDescription(String token, Long id, Long experienceId, Description description) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        try {
            Description existingDescription;
            Experience existingExperience;

            if (!Objects.equals(id, description.getId())) throw new BadRequest(StringConstants.INCORRECT_PATH_ID);

            existingDescription = descriptionRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.DESCRIPTION_NOT_FOUND));

            existingExperience = experienceRepository
                    .findById(experienceId)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.EXPERIENCE_NOT_FOUND));

            existingDescription.setDateUpdated(LocalDateTime.now());
            existingDescription.setDescription(description.getDescription());
            existingDescription.setExperience(existingExperience);

            return descriptionRepository.save(existingDescription);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
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
            existingDescription = descriptionRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.DESCRIPTION_NOT_FOUND));

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
