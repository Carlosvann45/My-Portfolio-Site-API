package io.myportfolioproject.api.domains.email;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.entities.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Objects;

/**
 * This class represents an email entity in the database
 */
@Entity
@Table(name = "emails")
public class Email extends BaseEntity {
    private String email;

    private String subject;

    private String body;

    @ManyToOne
    @JoinColumn(name = StringConstants.CONTACT_ID, nullable = false)
    @JsonBackReference
    private Contact contact;

    public Email() {
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

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Email email1 = (Email) o;
        return email.equals(email1.email) && subject.equals(email1.subject) && body.equals(email1.body) && contact.equals(email1.contact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), email, subject, body, contact);
    }

    @Override
    public String toString() {
        return "Email{" +
                "email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", contact=" + contact +
                '}';
    }
}
