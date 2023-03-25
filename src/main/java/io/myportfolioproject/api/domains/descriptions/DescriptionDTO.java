package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.length.ValidLength;

/**
 * This class represents a data transfer object for description entity
 */
public class DescriptionDTO extends BaseEntityDTO {

    @ValidLength(message = StringConstants.DESCRIPTION_LENGTH_ERROR)
    private String description;

    public DescriptionDTO() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
