package io.myportfolioproject.api.validators.description;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * An interface for a custom annotation for description validation
 *
 * @see java.lang.annotation.Annotation
 */
@Documented
@Constraint(validatedBy = ValidDescriptionImpl.class)
@Target({ElementType.FIELD, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidDescription {

    /**
     * Message for validation error
     *
     * @return string
     */
    String message() default "Description must be a valid length";

    /**
     * Minimum length for string validation
     *
     * @return integer
     */
    int minLength() default 50;

    /**
     * Maximum length for string validation
     *
     * @return integer
     */
    int maxLength() default 225;

    /**
     * Boolean for if field is required
     *
     * @return boolean
     */
    boolean isRequired() default true;

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
