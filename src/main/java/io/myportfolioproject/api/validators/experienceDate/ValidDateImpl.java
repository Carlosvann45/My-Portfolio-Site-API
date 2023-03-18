package io.myportfolioproject.api.validators.experienceDate;

import io.myportfolioproject.api.constants.StringConstants;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * Class to run validation for custom date validation
 */
public class ValidDateImpl implements ConstraintValidator<ValidDate, String> {

    private String message;

    private boolean isRequired;

    /**
     * Overrides initialize function for constraint validator
     *
     * @param validDateAnnotations annotation instance for a given constraint declaration
     */
    @Override
    public void initialize(ValidDate validDateAnnotations) {
        this.message = validDateAnnotations.message();
        this.isRequired = validDateAnnotations.isRequired();
    }

    /**
     * Overrides isValid function for constraint validator to run custom validation
     *
     * @param date             object to validate
     * @param validatorContext context in which the constraint is evaluated
     * @return boolean value for if field was valid
     */
    @Override
    public boolean isValid(String date, ConstraintValidatorContext validatorContext) {
        boolean isValid = isRequired ? defaultValidation(date) : validateNonRequired(date);

        // adds message constraint if date is not valid,
        // so we can show a custom message based from an annotation
        if (!isValid) {
            validatorContext.disableDefaultConstraintViolation();
            validatorContext.buildConstraintViolationWithTemplate(message).addConstraintViolation();
        }

        return isValid;
    }

    /**
     * Runs default validation for a date
     *
     * @param date string date to validate
     * @return boolean value for if date is valid
     * @validation
     */
    private boolean defaultValidation(String date) {
        // returns true if date follow this format: mm/yyyy
        if (date == null || date.isBlank() || date.isEmpty()) return false;
        else return date.trim().matches(StringConstants.DATE_REGEX);
    }

    /**
     * Validates date
     *
     * @param date string date to validate
     * @return boolean value for if string is valid
     */
    private boolean validateNonRequired(String date) {
        // returns true if date is null or
        // if default validator returns true
        if (date == null || date.isBlank() || date.isEmpty()) return true;
        else return date.trim().matches(StringConstants.DATE_REGEX);
    }
}
