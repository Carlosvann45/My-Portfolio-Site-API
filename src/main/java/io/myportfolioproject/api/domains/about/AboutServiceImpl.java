package io.myportfolioproject.api.domains.contacts;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.user.UserService;
import io.myportfolioproject.api.exceptions.Conflict;
import io.myportfolioproject.api.exceptions.ServerUnavailable;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * A service implementation for experience business logic
 */
@Service
public class ContactServiceImpl implements ContactService {

    private final Logger logger = LogManager.getLogger(ContactServiceImpl.class);

    @Autowired
    private UserService userService;

    @Autowired
    private ContactRepository contactRepository;

    /**
     * {@inheritDoc}
     */
    @Override
    public List<Contact> getContacts(String token) {
        // Ensures admin from token exist before moving forward
        userService.adminExistFromToken(token);

        try {
            return contactRepository.findAll();

        } catch (DataAccessException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Contact createContact(Contact contact) {
        try {
            contactRepository.findByEmail(contact.getEmail()).ifPresent(existingContact -> {
                throw new Conflict(StringConstants.CONTACT_EXIST);
            });

            contact.setDateCreated(LocalDateTime.now());
            contact.setDateUpdated(LocalDateTime.now());
            // ensures no new requests are created accidentally
            contact.setRequests(new ArrayList<>());

            return contactRepository.save(contact);

        } catch (DataAccessException e) {
            logger.error(e.getMessage());

            throw new ServerUnavailable(e.getMessage());
        }
    }
}
