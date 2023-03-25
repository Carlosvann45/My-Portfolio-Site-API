package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.domains.admin.AdminServiceImpl;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

/**
 * An email service class to send out emails
 */
@Service
public class EmailServiceImpl implements EmailService {

    private final Logger logger = LogManager.getLogger(EmailServiceImpl.class);

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private AdminServiceImpl adminService;

    @Autowired
    private EmailRepository emailRepository;

    /**
     * {@inheritDoc}
     * TODO: Integrate Gmail API
     */
    /*@Override
    public List<Email> getEmails(String token, Long contactId) {
        // Ensures admin from token exist before moving forward
        adminService.adminExistFromToken(token);

        try {
        return contactId == null ? emailRepository.findAll() : emailRepository.findEmailsByContactId(contactId);
        } catch (DataAccessException e) {
        logger.error(e);

        throw new ServerUnavailable(e.getMessage());
        }
    }*/

   /**
     * {@inheritDoc}
    * TODO: Integrate Gmail API
     */
    /*@Override
    public Email sendEmail(String token, Long id, Email email) {
        try {
            Contact existingContact = new Contact();

            existingContact = contactRepository
                    .findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.CONTACT_NOT_FOUND));

            email.setDateCreated(LocalDateTime.now());
            email.setDateUpdated(LocalDateTime.now());
            email.setContact(existingContact);

            Email newEmail = emailRepository.save(email);

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, "utf-8");

            messageHelper.setText(email.getBody(), true);
            messageHelper.setTo(existingContact.getEmail());
            messageHelper.setSubject(email.getSubject());
            messageHelper.setFrom("carlosvann45.services@gmail.com", "Portfolio Site Contact Request");

            mailSender.send(mimeMessage);

        } catch (DataAccessException | MessagingException | UnsupportedEncodingException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }*/

}
