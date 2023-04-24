package io.myportfolioproject.api.domains.request;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.contacts.ContactRepository;
import io.myportfolioproject.api.domains.email.EmailService;
import io.myportfolioproject.api.exceptions.NotFound;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import io.myportfolioproject.api.exceptions.TooManyRequests;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

/**
 * A service implementation for request business logic
 */
@Service
public class RequestServiceImpl implements RequestService {

    private final Logger logger = LogManager.getLogger(RequestServiceImpl.class);

    @Autowired
    private EmailService emailService;

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private ContactRepository contactRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public Request createRequest(String email, Request request) {
        try {
            Contact existingContact = contactRepository
                    .findByEmail(email)
                    .orElseThrow(() -> new EntityNotFoundException(StringConstants.CONTACT_EMAIL_NOT_FOUND));

            LocalDate todayDate = LocalDate.now();

            List<Request> requests = requestRepository.findAllByContactId(existingContact.getId())
                    .stream()
                    .filter(existingRequest -> todayDate != LocalDate.from(existingRequest.getDateCreated()))
                    .toList();

            if (requests.size() >= 2) throw new TooManyRequests(StringConstants.TOO_MANY_CONTACT_REQUEST_TODAY);

            request.setDateCreated(LocalDateTime.now());
            request.setDateUpdated(LocalDateTime.now());
            request.setContact(existingContact);

            Request newRequest = requestRepository.save(request);

            emailService.sendEmail(email, newRequest.getSubject(), StringConstants.AUTO_RESPONSE_TEMPLATE);

            return newRequest;

        } catch (DataAccessException e) {
            logger.error(e);

            throw new ServerUnavailable(e.getMessage());
        } catch (EntityNotFoundException e) {
            logger.error(e);

            throw new NotFound(e.getMessage());
        }
    }
}
