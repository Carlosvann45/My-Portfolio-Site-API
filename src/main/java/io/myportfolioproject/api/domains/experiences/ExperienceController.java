package io.myportfolioproject.api.domains.experiences;

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
@RequestMapping(value = Paths.EXPERIENCE)
@ExtensionMethod(MapperExtensions.class)
public class ExperienceController {

    private final Logger logger = LogManager.getLogger(ExperienceController.class);

    @Autowired
    private ExperienceService experienceService;

    /**
     * Makes call to experience service for all experiences
     *
     * @return list of experience DTOs
     */
    @GetMapping()
    public ResponseEntity<List<ExperienceDTO>> getExperiences() {
        logger.info(StringConstants.LOG_GET_EXPERIENCE);

        List<Experience> experienceList = experienceService.getExperience();

        List<ExperienceDTO> experienceDTOList = experienceList.mapExperiences();

        return new ResponseEntity<>(experienceDTOList, HttpStatus.OK);
    }

    /**
     * Makes a call to experience service to create a new experience
     *
     * @param token token to validate
     * @param experienceDTO new experience
     * @return newly created experience
     */
    @PostMapping(Paths.POST)
    public ResponseEntity<ExperienceDTO> createExperience(
            @RequestHeader(AUTHORIZATION) String token, @Valid @RequestBody ExperienceDTO experienceDTO
    ) {
        logger.info(StringConstants.LOG_POST_EXPERIENCE);

        Experience experience = experienceDTO.mapExperience();

        Experience newExperience = experienceService.createExperience(token, experience);

        ExperienceDTO newExperienceDTO = newExperience.mapExperience();

        return new ResponseEntity<>(newExperienceDTO, HttpStatus.CREATED);
    }

    /**
     * Makes a call to experience service to update an existing experience
     *
     * @param token token to validate
     * @param id id to verify
     * @param experienceDTO updated experience
     * @return newly updated experience
     */
    @PutMapping(Paths.ID)
    public ResponseEntity<ExperienceDTO> updateExperience(
            @RequestHeader(AUTHORIZATION) String token, @PathVariable Long id, @Valid @RequestBody ExperienceDTO experienceDTO
    ) {
        logger.info(StringConstants.LOG_PUT_EXPERIENCE);

        Experience experience = experienceDTO.mapExperience();

        Experience newExperience = experienceService.updateExperience(token, id, experience);

        ExperienceDTO newExperienceDTO = newExperience.mapExperience();

        return new ResponseEntity<>(newExperienceDTO, HttpStatus.OK);
    }

    /**
     * Makes a call to experience service to delete experience
     *
     * @param token token to verify admin account
     * @param id id to get experience
     * @return Http Status No content
     */
    @DeleteMapping(Paths.ID)
    public ResponseEntity<?> deleteExperience(
            @RequestHeader(AUTHORIZATION) String token, @PathVariable Long id
    ) {
        logger.info(StringConstants.LOG_DELETE_EXPERIENCE);

        experienceService.deleteExperience(token, id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
