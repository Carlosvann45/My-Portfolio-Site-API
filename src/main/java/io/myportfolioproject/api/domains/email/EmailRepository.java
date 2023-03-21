package io.myportfolioproject.api.domains.email;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface to access and query the database
 */
@Repository
public interface EmailRepository extends JpaRepository<Email, Long> {

    List<Email> findEmailsByContactId(Long contactId);
}
