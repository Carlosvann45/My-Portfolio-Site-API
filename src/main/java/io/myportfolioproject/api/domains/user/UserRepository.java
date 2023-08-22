package io.myportfolioproject.api.domains.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to access and query the database
 */
@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findAdminByUsername(String username);
}
