package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.domains.entities.BaseEntityDTO;

import java.util.Objects;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AdminDTO adminDTO = (AdminDTO) o;
        return username.equals(adminDTO.username) && password.equals(adminDTO.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, password);
    }

    @Override
    public String toString() {
        return "AdminDTO{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
