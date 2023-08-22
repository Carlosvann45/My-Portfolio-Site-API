package io.myportfolioproject.api.domains.admin;

import io.myportfolioproject.api.domains.entities.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Objects;

/**
 * This class represents an admin entity in the database
 */
@Entity
@Table(name = "admins")
public class Admin extends BaseEntity {

    private String username;

    private String password;

    public Admin() {
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
        if (!super.equals(o)) return false;
        Admin admin = (Admin) o;
        return username.equals(admin.username) && password.equals(admin.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), username, password);
    }

    @Override
    public String toString() {
        return "Admin{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
