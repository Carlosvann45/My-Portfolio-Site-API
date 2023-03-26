package io.myportfolioproject.api.domains.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Interface to access and query the database
 */
@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findAllByContactId(Long id);
}
