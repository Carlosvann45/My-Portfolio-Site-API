package io.myportfolioproject.api.domains.experiences;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.descriptions.Description;
import io.myportfolioproject.api.domains.entities.BaseEntity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
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

    private String startDate;


    private String endDate;

    @OneToMany(mappedBy = StringConstants.EXPERIENCE, cascade = CascadeType.ALL)
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

    public List<Description> getDescriptions() {
        return descriptions;
    }

    public void setDescriptions(List<Description> descriptions) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Experience that = (Experience) o;
        return company.equals(that.company) && position.equals(that.position) && startDate.equals(that.startDate) && Objects.equals(endDate, that.endDate) && descriptions.equals(that.descriptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), company, position, startDate, endDate, descriptions);
    }

    @Override
    public String toString() {
        return "Experience{" +
                "company='" + company + '\'' +
                ", position='" + position + '\'' +
                ", startDate='" + startDate + '\'' +
                ", endDate='" + endDate + '\'' +
                ", descriptions=" + descriptions +
                '}';
    }
}
