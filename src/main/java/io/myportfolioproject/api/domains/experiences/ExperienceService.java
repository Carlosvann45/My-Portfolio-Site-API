package io.myportfolioproject.api.domains.experiences;

import java.util.List;

/**
 * Interface class provides abstraction layer for customer service
 */
public interface ExperienceService {

    List<Experience> getExperience();

    Experience createExperience(String token, Experience experience);

    Experience updateExperience(String token, Long id, Experience experience);
}
