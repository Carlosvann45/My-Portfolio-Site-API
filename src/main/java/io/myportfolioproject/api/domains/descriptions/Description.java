package io.myportfolioproject.api.domains.descriptions;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.entities.BaseEntity;
import io.myportfolioproject.api.domains.experiences.Experience;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Objects;

/**
 * This class represents a description entity in the database
 */
@Entity
@Table(name = "descriptions")
public class Description extends BaseEntity {

    private String description;

    @ManyToOne
    @JoinColumn(name = StringConstants.EXPERIENCE_ID, nullable = false)
    @JsonBackReference
    private Experience experience;

    public Description() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Experience getExperience() {
        return experience;
    }

    public void setExperience(Experience experience) {
        this.experience = experience;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Description that = (Description) o;
        return description.equals(that.description) && experience.equals(that.experience);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), description, experience);
    }

    @Override
    public String toString() {
        return "Description{" +
                "description='" + description + '\'' +
                ", experience=" + experience +
                '}';
    }
}
