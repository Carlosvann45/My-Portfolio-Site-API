package io.myportfolioproject.api.domains.experiences;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.descriptions.Description;
import io.myportfolioproject.api.domains.entities.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * This class represents an experience entity in the database
 */
@Entity
@Table(name = "experiences")
public class Experience extends BaseEntity {

    private String company;

    private String position;

    private Month startMonth;

    private Year startYear;

    private Month endMonth;

    private Year endYear;

    private Boolean current;

    @OneToMany(mappedBy = StringConstants.DESCRIPTION)
    @JsonManagedReference
    private List<Description> descriptions = new ArrayList<>();

    public Experience() {
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

    public List<Description> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<Description> descriptions) {
        this.descriptions = descriptions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Experience that = (Experience) o;
        return company.equals(that.company) && position.equals(that.position) && startMonth == that.startMonth && startYear.equals(that.startYear) && endMonth == that.endMonth && Objects.equals(endYear, that.endYear) && current.equals(that.current) && descriptions.equals(that.descriptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), company, position, startMonth, startYear, endMonth, endYear, current, descriptions);
    }

    @Override
    public String toString() {
        return "Experience{" +
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
