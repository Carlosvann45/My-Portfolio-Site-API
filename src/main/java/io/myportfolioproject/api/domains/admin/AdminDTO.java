package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.domains.entities.BaseEntityDTO;

/**
 * This class represents a data transfer object for admin entity
 */
public class AdminDTO extends BaseEntityDTO {

    private String username;

    private String password;

    public AdminDTO() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
