package io.myportfolioproject.api.domains.email;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.Contact;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.length.ValidLength;

/**
 * This class represents a data transfer object for email entity
 */
public class EmailDTO extends BaseEntityDTO {

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
}