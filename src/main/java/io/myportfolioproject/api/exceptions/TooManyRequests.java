package io.myportfolioproject.api.exceptions;

/**
 * A custom exception for if there are to many requests
 */
public class TooManyRequests extends RuntimeException {
    public TooManyRequests() {
    }

    public TooManyRequests(String message) {
        super(message);
    }
}
