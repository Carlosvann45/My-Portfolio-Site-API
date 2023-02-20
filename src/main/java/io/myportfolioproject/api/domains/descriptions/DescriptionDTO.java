package io.myportfolioproject.api.domains.descriptions;

import io.myportfolioproject.api.domains.entities.BaseEntityDTO;

import java.util.Objects;

/**
 * This class represents a data transfer object for description entity
 */
public class DescriptionDTO extends BaseEntityDTO {

    private String description;

    public DescriptionDTO() {
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DescriptionDTO that = (DescriptionDTO) o;
        return description.equals(that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(description);
    }

    @Override
    public String toString() {
        return "DescriptionDTO{" +
                "description='" + description + '\'' +
                '}';
    }
}
