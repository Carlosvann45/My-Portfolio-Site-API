package io.myportfolioproject.api.domains.request;

import io.myportfolioproject.api.constants.StringConstants;
import io.myportfolioproject.api.domains.contacts.ContactDTO;
import io.myportfolioproject.api.domains.entities.BaseEntityDTO;
import io.myportfolioproject.api.validators.length.ValidLength;

/**
 * This class represents a data transfer object for request entity
 */
public class RequestDTO extends BaseEntityDTO {

    @ValidLength(
            minLength = 15,
            maxLength = 50,
            message = StringConstants.SUBJECT_LENGTH_REQ
    )
    private String subject;

    @ValidLength(message = StringConstants.BODY_LENGTH_REQ)
    private String body;

    private boolean responded;

    public RequestDTO() {
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
}
