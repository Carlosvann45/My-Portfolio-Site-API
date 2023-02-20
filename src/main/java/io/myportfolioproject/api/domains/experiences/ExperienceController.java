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

import java.util.List;

/**
 * Controller for customer endpoints
 */
@RestController
@RequestMapping(value = Paths.EXPERIENCE_PATH)
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
}
