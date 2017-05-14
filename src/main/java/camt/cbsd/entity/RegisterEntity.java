package camt.cbsd.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by Administrator on 14/5/2560.
 */
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RegisterEntity {

    String username;
    String password;
    String role;
    Customer customer;
    Shopkeeper shopkeeper;

}

