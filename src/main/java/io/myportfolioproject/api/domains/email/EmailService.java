package io.myportfolioproject.api.domains.email;

/**
 * Interface class for sending emails
 */
public interface EmailService {
    void sendEmail(String to, String subject, String email);
}
