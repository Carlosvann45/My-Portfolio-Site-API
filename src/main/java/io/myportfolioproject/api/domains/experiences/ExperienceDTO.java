package io.myportfolioproject.api.domains.experiences;

import io.myportfolioproject.api.domains.descriptions.DescriptionDTO;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * This class represents a data transfer object for experience entity
 */
public class ExperienceDTO extends BaseEntityDTO {

    private String company;

    private String position;

    private LocalDate startDate;

    private LocalDate endDate;

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

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
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
        return company.equals(that.company) && position.equals(that.position) && startDate.equals(that.startDate) && endDate.equals(that.endDate) && descriptions.equals(that.descriptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(company, position, startDate, endDate, descriptions);
    }

    @Override
    public String toString() {
        return "ExperienceDTO{" +
                "company='" + company + '\'' +
                ", position='" + position + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", descriptions=" + descriptions +
                '}';
    }
}
