package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.exceptions.ServerUnavailable;

/**
 * Interface class for sending emails
 */
public interface EmailService {

    /**
     * Retrieves all emails from repository
     *
     * @param token token to verify admin
     * @param  contactId contact id to filter emails
     * @throws ServerUnavailable if there is a database issue
     * @return list of emails
     */
    //List<Email> getEmails(String token, Long contactId);

    /**
     * Sends an email to selected account with subject and email
     *
     * @param token token to verify admin
     * @param id for looking for a valid contact request
     * @param email entity to represent email to send
     */
    //Email sendEmail(String token, Long id, Email email);
}
