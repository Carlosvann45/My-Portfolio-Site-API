package io.myportfolioproject.api.utility;

import io.myportfolioproject.api.domains.descriptions.Description;
import io.myportfolioproject.api.domains.descriptions.DescriptionDTO;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceDTO;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Extension methods to map entities
 */
public class MapperExtensions {

    /**
     * Maps a list of experience entities to experience DTOs
     *
     * @param experiences list to map out
     * @return new list of experience DTOs
     */
    public static List<ExperienceDTO> mapExperiences(List<Experience> experiences) {
        return experiences.stream().map(MapperExtensions::mapExperience).collect(Collectors.toList());
    }

    /**
     * Maps a list of experience DTOs to experience entities
     *
     * @param experienceDTOs list to map out
     * @return new list of experience entities
     */
    public static List<Experience> mapExperienceDTOs(List<ExperienceDTO> experienceDTOs) {
        return experienceDTOs.stream().map(MapperExtensions::mapExperience).collect(Collectors.toList());
    }

    /**
     * Maps an experience DTO to an experience entity
     *
     * @param experienceDTO DTO to map out
     * @return new experience entity
     */
    public static Experience mapExperience(ExperienceDTO experienceDTO) {
        Experience experience = new Experience();

        experience.setId(experienceDTO.getId());
        experience.setDateCreated(experienceDTO.getDateCreated());
        experience.setDateUpdated(experienceDTO.getDateUpdated());
        experience.setCompany(experienceDTO.getCompany());
        experience.setPosition(experienceDTO.getPosition());
        experience.setStartDate(experienceDTO.getStartDate());
        experience.setEndDate(experienceDTO.getEndDate());

        List<Description> descriptions = experienceDTO.getDescriptions()
                .stream()
                .map(MapperExtensions::mapDescription)
                .collect(Collectors.toList());

        experience.setDescriptions(descriptions);

        return experience;
    }

    /**
     * Maps an experience entity to an experience DTO
     *
     * @param experience entity to map out
     * @return new experience DTO
     */
    public static ExperienceDTO mapExperience(Experience experience) {
        ExperienceDTO experienceDTO = new ExperienceDTO();

        experienceDTO.setId(experience.getId());
        experienceDTO.setDateCreated(experience.getDateCreated());
        experienceDTO.setDateUpdated(experience.getDateUpdated());
        experienceDTO.setCompany(experience.getCompany());
        experienceDTO.setPosition(experience.getPosition());
        experienceDTO.setStartDate(experience.getStartDate());
        experienceDTO.setEndDate(experience.getEndDate());

        List<DescriptionDTO> descriptions = experience.getDescriptions()
                .stream()
                .map(MapperExtensions::mapDescription)
                .collect(Collectors.toList());

        experienceDTO.setDescriptions(descriptions);

        return experienceDTO;
    }

    /**
     * Maps a list of description entities to description DTOs
     *
     * @param descriptions list to map out
     * @return new list of description DTOs
     */
    public static List<DescriptionDTO> mapDescriptions(List<Description> descriptions) {
        return descriptions.stream().map(MapperExtensions::mapDescription).collect(Collectors.toList());
    }

    /**
     * Maps a list of description DTOs to description entities
     *
     * @param descriptionDTOs list to map out
     * @return new list of description entities
     */
    public static List<Description> mapDescriptionDTOs(List<DescriptionDTO> descriptionDTOs) {
        return descriptionDTOs.stream().map(MapperExtensions::mapDescription).collect(Collectors.toList());
    }

    /**
     * Maps a description DTO to a description entity
     *
     * @param descriptionDTO DTO to map out
     * @return a new description entity
     */
    public static Description mapDescription(DescriptionDTO descriptionDTO) {
        Description description = new Description();

        description.setId(descriptionDTO.getId());
        description.setDateCreated(descriptionDTO.getDateCreated());
        description.setDateUpdated(descriptionDTO.getDateUpdated());
        description.setDescription(descriptionDTO.getDescription());

        return description;
    }

    /**
     * Maps a description entity to a description DTO
     *
     * @param description entity to map out
     * @return new description DTO
     */
    public static DescriptionDTO mapDescription(Description description) {
        DescriptionDTO descriptionDTO = new DescriptionDTO();

        descriptionDTO.setId(description.getId());
        descriptionDTO.setDateCreated(description.getDateCreated());
        descriptionDTO.setDateUpdated(description.getDateUpdated());
        descriptionDTO.setDescription(description.getDescription());

        return descriptionDTO;
    }
}
