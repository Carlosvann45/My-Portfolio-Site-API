package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * A service implementation for experience business logic
 */
@Service
public class ExperienceServiceImpl implements ExperienceService {

    private final Logger logger = LogManager.getLogger(ExperienceServiceImpl.class);

    @Autowired
    private ExperienceRepository experienceRepository;

    /**
     * Retrieves all experiences from repository
     *
     * @return list of experiences
     */
    @Override
    public List<Experience> getExperience() {
        try {
            return experienceRepository.findAll();
        } catch(DataAccessException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }
    }
}
