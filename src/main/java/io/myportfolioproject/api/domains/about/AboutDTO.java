package io.myportfolioproject.api.domains.contacts;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.domains.request.RequestDTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

/**
 * This class represents a data transfer object for contact entity
 */
public class ContactDTO extends BaseEntityDTO {

    @NotNull(message = StringConstants.EMAIL_REQUIRED)
    @Email(message = StringConstants.EMAIL_VALID_FORMAT)
    private String email;

    private List<RequestDTO> requests = new ArrayList<>();

    public ContactDTO() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<RequestDTO> getRequests() {
        return requests;
    }

    public void setRequests(List<RequestDTO> requestDTOS) {
        this.requests = requestDTOS;
    }
}
