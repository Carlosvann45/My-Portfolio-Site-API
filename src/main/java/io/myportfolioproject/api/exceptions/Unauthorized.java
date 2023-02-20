package io.myportfolioproject.api.exceptions;

public class Unauthorized extends RuntimeException {

    public Unauthorized() {
    }

    public Unauthorized(String message) {
        super(message);
    }
}
