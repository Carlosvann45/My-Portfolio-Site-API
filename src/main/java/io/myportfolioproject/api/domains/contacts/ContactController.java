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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
     * @return list of contact DTOs
     */
    @GetMapping()
    public ResponseEntity<List<ContactDTO>> getContacts(@RequestHeader(AUTHORIZATION) String token) {
        logger.info(StringConstants.LOG_GET_CONTACT);

        List<Contact> contactList = contactService.getContact(token);

        List<ContactDTO> contactDTOs = contactList.mapContacts();

        return new ResponseEntity<>(contactDTOs, HttpStatus.OK);
    }
}
