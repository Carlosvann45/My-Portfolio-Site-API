package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.descriptions.DescriptionDTO;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.experienceDate.ValidDate;
import org.hibernate.validator.constraints.Length;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

/**
 * This class represents a data transfer object for experience entity
 */
public class ExperienceDTO extends BaseEntityDTO {

    @NotBlank(message = StringConstants.COMPANY_REQUIRED)
    @Length(min = 2, message = StringConstants.COMPANY_MIN_LEN)
    private String company;

    @NotBlank(message = StringConstants.POSITION_REQUIRED)
    @Length(min = 2, message = StringConstants.POSITION_MIN_LEN)
    private String position;

    @ValidDate()
    private String startDate;

    @ValidDate(isRequired = false)
    private String endDate;

    @NotNull(message = StringConstants.CURRENT_REQUIRED)
    private Boolean current;

    @Valid
    private List<DescriptionDTO> descriptions = new ArrayList<>();

    public ExperienceDTO() {
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Boolean getCurrent() {
        return current;
    }

    public void setCurrent(Boolean current) {
        this.current = current;
    }

    public List<DescriptionDTO> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<DescriptionDTO> descriptions) {
        this.descriptions = descriptions;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
