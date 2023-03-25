package io.myportfolioproject.api.domains.request;

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
 * This class represents a requets entity in the database
 */
@Entity
@Table(name = "requests")
public class Request extends BaseEntity {

    private String subject;

    private String body;

    private boolean responded;

    @ManyToOne
    @JoinColumn(name = StringConstants.CONTACT_ID, nullable = false)
    @JsonBackReference
    private Contact contact;

    public Request() {
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

    public boolean getResponded() {
        return responded;
    }

    public void setResponded(boolean responded) {
        this.responded = responded;
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
        Request request = (Request) o;
        return responded == request.responded && subject.equals(request.subject) && body.equals(request.body) && contact.equals(request.contact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), subject, body, responded, contact);
    }

    @Override
    public String toString() {
        return "Request{" +
                "subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", responded=" + responded +
                ", contact=" + contact +
                '}';
    }
}
