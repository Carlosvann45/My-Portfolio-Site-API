package io.myportfolioproject.api.domains.descriptions;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to access and query the database
 */
@Repository
public interface DescriptionRepository extends JpaRepository<Description, Long> {
}
