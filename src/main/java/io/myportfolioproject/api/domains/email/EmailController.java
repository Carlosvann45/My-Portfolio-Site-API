package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceController;
import io.myportfolioproject.api.domains.experiences.ExperienceDTO;
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
@RequestMapping(value = Paths.EMAIL)
@ExtensionMethod(MapperExtensions.class)
public class EmailController {

    private final Logger logger = LogManager.getLogger(EmailController.class);

    @Autowired
    private EmailService emailService;


    /**
     * Makes a call to email service for all emails
     *
     * @param token token to validate admin
     * @param contactId optional id to filter emails
     * @return list of emails
     */
    /*@GetMapping()
    public ResponseEntity<List<EmailDTO>> getEmails(
            @RequestHeader(AUTHORIZATION) String token,
            @RequestParam(required = false) Long contactId
    ) {
        logger.info(StringConstants.LOG_GET_EMAIL);

        List<Email> emailList = emailService.getEmails(token, contactId);

        List<EmailDTO> emailDTOs = emailList.mapEmails();

        return new ResponseEntity<>(emailDTOs, HttpStatus.OK);
    }*/

    /**
     * Sends an email for a contact request
     *
     * @param token token to validate admin
     * @param id id to find contact
     * @param emailDTO email entity
     * @return new email entity
     */
    /*@PostMapping
    public ResponseEntity<EmailDTO> sendEmail(
            @RequestHeader(AUTHORIZATION) String token,
            @PathVariable Long id,
            @Valid @RequestBody EmailDTO emailDTO
    ) {
        logger.info(StringConstants.LOG_SEND_EXPERIENCE);

        Email email = emailDTO.mapEmail();

        Email newEmail = emailService.sendEmail(token, id, email);

        EmailDTO newEmailDTO = newEmail.mapEmail();

        return new ResponseEntity<>(newEmailDTO, HttpStatus.CREATED);
    }*/

}
