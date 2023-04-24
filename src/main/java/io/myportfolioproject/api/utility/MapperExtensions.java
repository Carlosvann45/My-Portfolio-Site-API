package io.myportfolioproject.api.utility;

import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.contacts.ContactDTO;
import io.myportfolioproject.api.domains.descriptions.Description;
import io.myportfolioproject.api.domains.descriptions.DescriptionDTO;
import io.myportfolioproject.api.domains.experiences.Experience;
import io.myportfolioproject.api.domains.experiences.ExperienceDTO;
import io.myportfolioproject.api.domains.request.Request;
import io.myportfolioproject.api.domains.request.RequestDTO;

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
        experience.setCurrent(experienceDTO.getCurrent());

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
        experienceDTO.setCurrent(experience.getCurrent());

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

    /**
     * Maps a list of contact entities to contact DTOs
     *
     * @param contacts list to map out
     * @return new list of contact DTOs
     */
    public static List<ContactDTO> mapContacts(List<Contact> contacts) {
        return contacts.stream().map(MapperExtensions::mapContact).collect(Collectors.toList());
    }

    /**
     * Maps a list of contact DTOs to contact entities
     *
     * @param contactDTOs list to map out
     * @return new list of contact entities
     */
    public static List<Contact> mapContactDTOs(List<ContactDTO> contactDTOs) {
        return contactDTOs.stream().map(MapperExtensions::mapContact).collect(Collectors.toList());
    }

    /**
     * Maps a contact DTO entity to a contact
     *
     * @param contactDTO entity to map out
     * @return new contact
     */
    public static Contact mapContact(ContactDTO contactDTO) {
        Contact contact = new Contact();

        contact.setId(contactDTO.getId());
        contact.setDateCreated(contactDTO.getDateCreated());
        contact.setDateUpdated(contactDTO.getDateUpdated());
        contact.setEmail(contactDTO.getEmail());

        List<Request> requests = contactDTO
                .getRequests()
                .stream()
                .map(MapperExtensions::mapRequest).toList();

        contact.setRequests(requests);

        return contact;
    }

    /**
     * Maps a contact entity to a contact DTO
     *
     * @param contact entity to map out
     * @return new contact DTO
     */
    public static ContactDTO mapContact(Contact contact) {
        ContactDTO contactDTO = new ContactDTO();

        contactDTO.setId(contact.getId());
        contactDTO.setDateCreated(contact.getDateCreated());
        contactDTO.setDateUpdated(contact.getDateUpdated());
        contactDTO.setEmail(contact.getEmail());

        List<RequestDTO> requestDTOs = contact
                .getRequests()
                .stream()
                .map(MapperExtensions::mapRequest).toList();

        contactDTO.setRequests(requestDTOs);

        return contactDTO;
    }

    /**
     * Maps a request DTO entity to a request
     *
     * @param requestDTO entity to map out
     * @return new request
     */
    public static Request mapRequest(RequestDTO requestDTO) {
        Request request = new Request();

        request.setId(requestDTO.getId());
        request.setDateCreated(requestDTO.getDateCreated());
        request.setDateUpdated(requestDTO.getDateUpdated());
        request.setSubject(requestDTO.getSubject());
        request.setBody(requestDTO.getBody());
        request.setResponded(requestDTO.getResponded());

        return request;
    }

    /**
     * Maps a request entity to a request DTO
     *
     * @param request entity to map out
     * @return new request DTO
     */
    public static RequestDTO mapRequest(Request request) {
        RequestDTO requestDTO = new RequestDTO();

        requestDTO.setId(request.getId());
        requestDTO.setDateCreated(request.getDateCreated());
        requestDTO.setDateUpdated(request.getDateUpdated());
        requestDTO.setSubject(request.getSubject());
        requestDTO.setBody(request.getBody());
        requestDTO.setResponded(request.getResponded());

        return requestDTO;
    }
}
