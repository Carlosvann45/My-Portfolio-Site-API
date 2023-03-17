package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.constants.Paths;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceController;
import io.myportfolioproject.api.domains.experiences.ExperienceDTO;
import io.myportfolioproject.api.domains.experiences.ExperienceService;
import io.myportfolioproject.api.utility.MapperExtensions;
import lombok.experimental.ExtensionMethod;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.apache.http.HttpHeaders.AUTHORIZATION;

/**
 * Controller for description endpoints
 */
@RestController
@RequestMapping(value = Paths.DESCRIPTION)
@ExtensionMethod(MapperExtensions.class)
public class DescriptionController {

    private final Logger logger = LogManager.getLogger(DescriptionController.class);

    @Autowired
    private DescriptionService descriptionService;

    /**
     * Makes a call to description service to create a new description
     *
     * @param token token to validate
     * @param descriptionDTO new description
     * @return newly created description
     */
    @PostMapping(Paths.DESCRIPTION_CREATE)
    public ResponseEntity<DescriptionDTO> createDescription(
            @RequestHeader(AUTHORIZATION) String token, @PathVariable Long id, @Valid @RequestBody DescriptionDTO descriptionDTO
    ) {
        logger.info(StringConstants.LOG_POST_DESCRIPTION);

        Description description = descriptionDTO.mapDescription();

        Description newDescription = descriptionService.createDescription(token, id, description);

        DescriptionDTO newDescriptionDTO = newDescription.mapDescription();

        return new ResponseEntity<>(newDescriptionDTO, HttpStatus.CREATED);
    }

    /**
     * Makes a call to description service to delete description
     *
     * @param token token to verify admin account
     * @param id id to get description
     * @return Http Status No content
     */
    @DeleteMapping(Paths.ID)
    public ResponseEntity<?> deleteDescription(
            @RequestHeader(AUTHORIZATION) String token, @PathVariable Long id
    ) {
        logger.info(StringConstants.LOG_DELETE_DESCRIPTION);

        descriptionService.deleteDescription(token, id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
