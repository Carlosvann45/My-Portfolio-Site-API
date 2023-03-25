package io.myportfolioproject.api.domains.contacts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to access and query the database
 */
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
