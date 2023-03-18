package io.myportfolioproject.api.domains.contacts;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.email.EmailDTO;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.length.ValidLength;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * This class represents a data transfer object for contact entity
 */
public class ContactDTO extends BaseEntityDTO {

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

    private boolean responded;

    private List<EmailDTO> emails = new ArrayList<>();

    public ContactDTO() {
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

    public boolean getResponded() {
        return responded;
    }

    public void setResponded(boolean responded) {
        this.responded = responded;
    }

    public List<EmailDTO> getEmails() {
        return emails;
    }

    public void setEmails(List<EmailDTO> emails) {
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
        ContactDTO that = (ContactDTO) o;
        return responded == that.responded && email.equals(that.email) && subject.equals(that.subject) && body.equals(that.body) && emails.equals(that.emails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, subject, body, responded, emails);
    }

    @Override
    public String toString() {
        return "ContactDTO{" +
                "email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", body='" + body + '\'' +
                ", responded=" + responded +
                ", emails=" + emails +
                '}';
    }
}
