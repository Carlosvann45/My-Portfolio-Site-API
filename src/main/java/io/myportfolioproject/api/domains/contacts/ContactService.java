package io.myportfolioproject.api.domains.contacts;

import io.myportfolioproject.api.exceptions.Conflict;
import io.myportfolioproject.api.exceptions.ServerUnavailable;

import java.util.List;

/**
 * Interface class provides abstraction layer for contact service
 */
public interface ContactService {

    /**
     * Retrieves all contacts from repository
     *
     * @param token JWT to verify admin
     * @throws ServerUnavailable if there is a database issue
     * @return list of contacts
     */
    List<Contact> getContact(String token);

    /**
     * Creates contact in repository
     *
     * @param contact contact to create
     * @throws Conflict if email already exist
     * @throws ServerUnavailable if there is a database issue
     * @return list of contacts
     */
    Contact createContact(Contact contact);
}
