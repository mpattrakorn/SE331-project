package camt.cbsd.entity;

import camt.cbsd.config.json.View;
import camt.cbsd.entity.security.Authority;
import camt.cbsd.entity.security.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.*;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Administrator on 16/4/2560.
 */
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    String name;
    String description;
    String image;
    double price;
    int amount;
    double rate;
    double lowestPrice;
    double highestPrice;

    @OneToOne
    User user;
    @JsonView(View.Login.class)
    public List<Authority> getAuthorities(){
        return user.getAuthorities();
    }

}
