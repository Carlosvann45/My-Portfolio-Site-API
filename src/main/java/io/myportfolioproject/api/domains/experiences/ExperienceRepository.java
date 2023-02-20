package io.myportfolioproject.api.domains.experiences;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to access and query the database
 */
@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
}
