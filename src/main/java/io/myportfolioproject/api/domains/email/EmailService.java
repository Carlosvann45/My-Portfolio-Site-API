package io.myportfolioproject.api.domains.email;

/**
 * Interface class for sending emails
 */
public interface EmailService {


    /**
     * Sends an email to selected account with email information
     *
     * @param email email to send to
     * @param subject subject for email
     * @param body body for the email
     */
    void sendEmail(String email, String subject, String body);
}
