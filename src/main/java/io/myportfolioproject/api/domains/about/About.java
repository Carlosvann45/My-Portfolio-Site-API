package io.myportfolioproject.api.domains.contacts;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.entities.BaseEntity;
import io.myportfolioproject.api.domains.request.Request;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * This class represents a contact entity in the database
 */
@Entity
@Table(name = "contacts")
public class Contact extends BaseEntity {

    private String email;

    @OneToMany(mappedBy = StringConstants.CONTACT, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Request> requests = new ArrayList<>();
    public Contact() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Request> getRequests() {
        return requests;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Contact contact = (Contact) o;
        return email.equals(contact.email) && requests.equals(contact.requests);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), email, requests);
    }

    @Override
    public String toString() {
        return "Contact{" +
                "email='" + email + '\'' +
                ", requests=" + requests +
                '}';
    }
}
