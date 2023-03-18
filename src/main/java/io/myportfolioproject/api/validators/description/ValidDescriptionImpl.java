package io.myportfolioproject.api.validators.description;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Class to run validation for custom description validation
 */
public class ValidDescriptionImpl implements ConstraintValidator<ValidDescription, String> {

    private String message;

    private boolean isRequired;

    private int minLength;

    private int maxLength;


    /**
     * Overrides initialize function for constraint validator
     *
     * @param validDateAnnotations annotation instance for a given constraint declaration
     */
    @Override
    public void initialize(ValidDescription validDateAnnotations) {
        this.message = validDateAnnotations.message();
        this.isRequired = validDateAnnotations.isRequired();
        this.minLength = validDateAnnotations.minLength();
        this.maxLength = validDateAnnotations.maxLength();
    }

    /**
     * Overrides isValid function for constraint validator to run custom validation
     *
     * @param description      object to validate
     * @param validatorContext context in which the constraint is evaluated
     * @return boolean value for if field was valid
     */
    @Override
    public boolean isValid(String description, ConstraintValidatorContext validatorContext) {
        boolean isValid = isRequired ? defaultValidation(description) : validateNonRequired(description);

        // adds message constraint if date is not valid,
        // so we can show a custom message based from an annotation
        if (!isValid) {
            validatorContext.disableDefaultConstraintViolation();
            validatorContext.buildConstraintViolationWithTemplate(message).addConstraintViolation();
        }

        return isValid;
    }

    /**
     * Runs default validation for a description
     *
     * @param description string description to validate
     * @return boolean value for if description is valid
     * @validation
     */
    private boolean defaultValidation(String description) {
        if (description == null || description.isBlank() || description.isEmpty()) return false;
        else return description.trim().length() >= minLength && description.trim().length() <= maxLength;
    }

    /**
     * Validates description
     *
     * @param description string description to validate
     * @return boolean value for if string is valid
     */
    private boolean validateNonRequired(String description) {
        // returns true if description is null or
        // if default validator returns true
        if (description == null || description.isBlank() || description.isEmpty()) return true;
        else return description.trim().length() >= minLength && description.trim().length() <= maxLength;
    }
}
