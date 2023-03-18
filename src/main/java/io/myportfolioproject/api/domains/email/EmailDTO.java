package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.length.ValidLength;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Objects;

/**
 * This class represents a data transfer object for email entity
 */
public class EmailDTO extends BaseEntityDTO {

    @NotNull(message = StringConstants.EMAIL_REQUIRED)
    @Email(message = StringConstants.EMAIL_VALID_FORMAT)
    private String email;

    @ValidLength(
            minLength = 15,
            maxLength = 50,
            message = StringConstants.SUBJECT_LENGTH_REQ
    )
    private String subject;

    @ValidLength(message = StringConstants.BODY_LENGTH_REQ)
    private String body;

    private Contact contact;

    public EmailDTO() {
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
        EmailDTO emailDTO = (EmailDTO) o;
        return email.equals(emailDTO.email) && subject.equals(emailDTO.subject) && body.equals(emailDTO.body) && contact.equals(emailDTO.contact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, subject, body, contact);
    }

    @Override
    public String toString() {
        return "EmailDTO{" +
                "email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", contact=" + contact +
                '}';
    }
}
