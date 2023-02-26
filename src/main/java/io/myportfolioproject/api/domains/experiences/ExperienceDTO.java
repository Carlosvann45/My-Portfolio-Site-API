package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.descriptions.DescriptionDTO;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * This class represents a data transfer object for experience entity
 */
public class ExperienceDTO extends BaseEntityDTO {

    @NotBlank(message = StringConstants.COMPANY_REQUIRED)
    private String company;

    @NotBlank(message = StringConstants.POSITION_REQUIRED)
    private String position;

    @NotNull(message = StringConstants.START_MONTH_REQUIRED)
    private Month startMonth;

    @NotNull(message = StringConstants.START_YEAR_REQUIRED)
    private Year startYear;

    private Month endMonth;

    private Year endYear;

    @NotNull(message = StringConstants.CURRENT_REQUIRED)
    private Boolean current;

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

    public Month getStartMonth() {
        return startMonth;
    }

    public void setStartMonth(Month startMonth) {
        this.startMonth = startMonth;
    }

    public Year getStartYear() {
        return startYear;
    }

    public void setStartYear(Year startYear) {
        this.startYear = startYear;
    }

    public Month getEndMonth() {
        return endMonth;
    }

    public void setEndMonth(Month endMonth) {
        this.endMonth = endMonth;
    }

    public Year getEndYear() {
        return endYear;
    }

    public void setEndYear(Year endYear) {
        this.endYear = endYear;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExperienceDTO that = (ExperienceDTO) o;
        return company.equals(that.company) && position.equals(that.position) && startMonth == that.startMonth && startYear.equals(that.startYear) && endMonth == that.endMonth && Objects.equals(endYear, that.endYear) && current.equals(that.current) && descriptions.equals(that.descriptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(company, position, startMonth, startYear, endMonth, endYear, current, descriptions);
    }

    @Override
    public String toString() {
        return "ExperienceDTO{" +
                "company='" + company + '\'' +
                ", position='" + position + '\'' +
                ", startMonth=" + startMonth +
                ", startYear=" + startYear +
                ", endMonth=" + endMonth +
                ", endYear=" + endYear +
                ", current=" + current +
                ", descriptions=" + descriptions +
                '}';
    }
}
