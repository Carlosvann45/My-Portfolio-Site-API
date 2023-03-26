package io.myportfolioproject.api.domains.request;

import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;

/**
 * Interface class provides abstraction layer for request service
 */
public interface RequestService {

    /**
     * Creates a new request
     *
     * @param email      email to validate
     * @param request experience to create
     * @throws NotFound          if contact is not found
     * @throws ServerUnavailable if there is a database issue
     * @return newly created request
     */
    Request createRequest(String email, Request request);
}
