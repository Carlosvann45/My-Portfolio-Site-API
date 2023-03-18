package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.exceptions.BadRequest;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;

/**
 * Interface class provides abstraction layer for description service
 */
public interface DescriptionService {

    /**
     * Creates a new description
     *
     * @param token       token to validate
     * @param id          id to find experience
     * @param description description to create
     * @throws ServerUnavailable if there is a database issue
     * @throws NotFound          if experience is not found
     * @return newly created experience
     */
    Description createDescription(String token, Long id, Description description);

    /**
     * Updates a existing description
     *
     * @param token        token to validate
     * @param id           id to verify description
     * @param experienceId id to verify experience
     * @param description  updated description
     * @throws ServerUnavailable if there is a database issue
     * @throws BadRequest        if there is an issue with description id
     * @throws NotFound          if experience/description is not found
     * @return newly updated description
     */
    Description updateDescription(String token, Long id, Long experienceId, Description description);

    /**
     * Deletes an existing description
     *
     * @param token token to verify admin account
     * @param id    id to find existing description
     * @throws ServerUnavailable if there is a database issue
     * @throws NotFound          if description is not found
     */
    void deleteDescription(String token, Long id);
}