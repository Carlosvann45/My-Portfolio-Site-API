package io.myportfolioproject.api.domains.contacts;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.email.Email;
import io.myportfolioproject.api.domains.entities.BaseEntity;

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

    private String subject;

    private String body;

    private boolean responded;

    @OneToMany(mappedBy = StringConstants.CONTACT, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Email> emails = new ArrayList<>();

    public Contact() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public boolean isResponded() {
        return responded;
    }

    public void setResponded(boolean responded) {
        this.responded = responded;
    }

    public List<Email> getEmails() {
        return emails;
    }

    public void setEmails(List<Email> emails) {
        this.emails = emails;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Contact contact = (Contact) o;
        return responded == contact.responded && email.equals(contact.email) && subject.equals(contact.subject) && body.equals(contact.body) && emails.equals(contact.emails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), email, subject, body, responded, emails);
    }

    @Override
    public String toString() {
        return "Contact{" +
                "email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", responded=" + responded +
                ", emails=" + emails +
                '}';
    }
}
