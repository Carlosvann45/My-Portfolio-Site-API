package io.thedatapirates.financeapi.utility;

import io.thedatapirates.financeapi.domains.customers.User;
import io.thedatapirates.financeapi.domains.customers.RequestUserDTO;
import io.thedatapirates.financeapi.domains.customers.ResponseUserDTO;

/**
 * Extension methods to map entities
 */
public class MapperExtensions {

    /**
     * Maps user to user dto
     *
     * @param user user to map
     * @return newly created user dto
     */
    public static ResponseUserDTO mapUserToDTO(User user) {
        ResponseUserDTO userDTO = new ResponseUserDTO();

        userDTO.setId(user.getId());
        userDTO.setDateCreated(user.getDateCreated());
        userDTO.setDateUpdated(user.getDateUpdated());
        userDTO.setFirstName(user.getFirstName());
        userDTO.setLastName(user.getLastName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());

        return userDTO;
    }

    /**
     * Maps user dto to user
     *
     * @param userDTO customer dto to map
     * @return newly created user
     */
    public static User mapDTOToUser(RequestUserDTO userDTO) {
        User user = new User();

        user.setId(userDTO.getId());
        user.setDateCreated(userDTO.getDateCreated());
        user.setDateUpdated(userDTO.getDateUpdated());
        user.setFirstName(userDTO.getFirstName());
        user.setLastName(userDTO.getLastName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());

        return user;
    }
}
