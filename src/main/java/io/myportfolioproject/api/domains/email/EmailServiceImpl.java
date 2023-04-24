package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

/**
 * An email service class to send and gather out emails for Gmail
 */
@Service
public class EmailServiceImpl implements EmailService {

    private final Logger logger = LogManager.getLogger(EmailServiceImpl.class);

    @Autowired
    private JavaMailSender mailSender;

    /**
     * {@inheritDoc}
     */
    @Override
    public void sendEmail(String email, String subject, String body) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, StringConstants.UTF_ENCODING);

            messageHelper.setText(body, true);
            messageHelper.setTo(email);
            messageHelper.setSubject(subject);
            messageHelper.setFrom(StringConstants.SERVICE_EMAIL, StringConstants.SERVICE_PERSONAL);

            mailSender.send(mimeMessage);

        } catch (MessagingException | UnsupportedEncodingException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }
    }
}
