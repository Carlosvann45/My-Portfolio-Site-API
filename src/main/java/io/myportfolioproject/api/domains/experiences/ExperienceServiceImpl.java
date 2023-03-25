package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.admin.AdminService;
import io.myportfolioproject.api.domains.descriptions.DescriptionRepository;
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * A service implementation for experience business logic
 */
@Service
public class ExperienceServiceImpl implements ExperienceService {

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
    public List<Experience> getExperience() {
        try {
            return experienceRepository.findAll();

        } catch (DataAccessException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Experience createExperience(String token, Experience experience) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        experience.setCompany(capitalizeWords(experience.getCompany()));
        experience.setPosition(capitalizeWords(experience.getPosition()));
        experience.setDateCreated(LocalDateTime.now());
        experience.setDateUpdated(LocalDateTime.now());
        // ensures no new descriptions are made
        experience.setDescriptions(new ArrayList<>());

        try {
            return experienceRepository.save(experience);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Experience updateExperience(String token, Long id, Experience experience) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        try {
            Experience existingExperience;

            if (!Objects.equals(id, experience.getId())) throw new BadRequest(StringConstants.INCORRECT_PATH_ID);

            existingExperience = experienceRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.EXPERIENCE_NOT_FOUND));

            existingExperience.setDateUpdated(LocalDateTime.now());
            existingExperience.setCompany(capitalizeWords(experience.getCompany()));
            existingExperience.setPosition(capitalizeWords(experience.getPosition()));
            existingExperience.setStartDate(experience.getStartDate());
            existingExperience.setEndDate(experience.getEndDate());
            existingExperience.setCurrent(experience.getCurrent());

            return experienceRepository.save(existingExperience);
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
    public void deleteExperience(String token, Long id) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        Experience existingExperience;

        try {
            existingExperience = experienceRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.EXPERIENCE_NOT_FOUND));

            experienceRepository.delete(existingExperience);
        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }

    /**
     * Helper Method: Capitalizes the first index of all words that are separated by a space
     * and joins them back together with a space
     *
     * @param words words to capitalize
     * @return capitalized words string
     */
    private String capitalizeWords(String words) {
        return Arrays.stream(words.split(" "))
                .map(word -> word.substring(0, 1).toUpperCase().concat(word.substring(1)))
                .collect(Collectors.joining(" "));
    }
}
