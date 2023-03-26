package io.myportfolioproject.api.domains.request;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.contacts.ContactDTO;
import io.myportfolioproject.api.utility.MapperExtensions;
import lombok.experimental.ExtensionMethod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Controller for request endpoints
 */
@RestController
@RequestMapping(value = Paths.REQUESTS)
@ExtensionMethod(MapperExtensions.class)
public class RequestController {

    private final Logger logger = LogManager.getLogger(RequestController.class);

    @Autowired
    private RequestService requestService;

    /**
     * Makes call to request service to create request
     *
     * @param requestDTO request to create
     * @return newly created request
     */
    @PostMapping(path = Paths.CONTACT_EMAIL)
    public ResponseEntity<RequestDTO> createRequest(@PathVariable String email, @Valid @RequestBody RequestDTO requestDTO) {
        logger.info(StringConstants.LOG_POST_REQUEST);

        Request request = requestDTO.mapRequest();

        Request newRequest = requestService.createRequest(email, request);

        RequestDTO newRequestDTO = newRequest.mapRequest();

        return  new ResponseEntity<>(newRequestDTO, HttpStatus.CREATED);
    }
}
