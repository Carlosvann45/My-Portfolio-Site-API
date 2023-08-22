package io.myportfolioproject.api.domains.contacts;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.utility.MapperExtensions;
import lombok.experimental.ExtensionMethod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.apache.http.HttpHeaders.AUTHORIZATION;

/**
 * Controller for experience endpoints
 */
@RestController
@RequestMapping(value = Paths.CONTACTS)
@ExtensionMethod(MapperExtensions.class)
public class ContactController {

    private final Logger logger = LogManager.getLogger(ContactController.class);

    @Autowired
    private ContactService contactService;

    /**
     * Makes call to contact service for all contacts
     *
     * @param token token to verify admin account
     * @return list of contact DTOs
     */
    @GetMapping()
    public ResponseEntity<List<ContactDTO>> getContacts(@RequestHeader(AUTHORIZATION) String token) {
        logger.info(StringConstants.LOG_GET_CONTACT);

        List<Contact> contactList = contactService.getContacts(token);

        List<ContactDTO> contactDTOs = contactList.mapContacts();

        return new ResponseEntity<>(contactDTOs, HttpStatus.OK);
    }

    /**
     * Makes call to contact service to create contact
     *
     * @param contactDTO contact to create
     * @return newly created contact
     */
    @PostMapping(path = Paths.POST)
    public ResponseEntity<ContactDTO> createContact(@Valid @RequestBody ContactDTO contactDTO) {
        logger.info(StringConstants.LOG_POST_CONTACT);

        Contact contact = contactDTO.mapContact();

        Contact newContact = contactService.createContact(contact);

        ContactDTO newContactDTO = newContact.mapContact();

        return  new ResponseEntity<>(newContactDTO, HttpStatus.CREATED);
    }
}
