package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.exceptions.BadRequest;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;

import java.util.List;

/**
 * Interface class provides abstraction layer for experience service
 */
public interface ExperienceService {

    /**
     * Retrieves all experiences from repository
     *
     * @throws ServerUnavailable if there is a database issue
     * @return list of experiences
     */
    List<Experience> getExperience();

    /**
     * Creates a new experience
     *
     * @param token token to validate
     * @param experience experience to create
     * @throws ServerUnavailable if there is a database issue
     * @return newly created experience
     */
    Experience createExperience(String token, Experience experience);

    /**
     * Updates a existing experience
     *
     * @param token token to validate
     * @param id id to verify experience
     * @param experience updated experience
     * @throws ServerUnavailable if there is a database issue
     * @throws BadRequest if there is an issue with experience/description ids
     * @throws NotFound if experience/description is not found
     * @return newly updated experience
     */
    Experience updateExperience(String token, Long id, Experience experience);

    /**
     * Deletes an existing experience
     *
     * @param token token to verify admin account
     * @param id id to find existing experience
     * @throws ServerUnavailable if there is a database issue
     * @throws NotFound if experience is not found
     */
    void deleteExperience(String token, Long id);
}
