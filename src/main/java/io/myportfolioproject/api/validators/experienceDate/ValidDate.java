package io.myportfolioproject.api.validators.experienceDate;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

/**
 * An interface for a custom annotation for experience date validation
 */
@Documented
@Constraint(validatedBy = ValidExperienceDateImpl.class)
@Target({ ElementType.FIELD, ElementType.ANNOTATION_TYPE })
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidDate {

    /**
     * Message for validation error
     *
     * @return string
     */
    String message() default "Date must be in valid format.(e.g. mm/yyyy)";

    /**
     * Boolean for if field is required
     *
     * @return boolean
     */
    boolean isRequired() default  true;

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
