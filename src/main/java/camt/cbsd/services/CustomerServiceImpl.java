package camt.cbsd.services;

import camt.cbsd.dao.CustomerDao;
import camt.cbsd.entity.RegisterEntity;
import camt.cbsd.entity.Customer;
import camt.cbsd.entity.security.Authority;
import camt.cbsd.entity.security.AuthorityName;
import camt.cbsd.entity.security.User;
import camt.cbsd.security.repository.AuthorityRepository;
import org.hibernate.Hibernate;
import org.jvnet.hk2.annotations.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by Administrator on 14/5/2560.
 */
@Service
@ConfigurationProperties(prefix = "server")
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerDao customerDao;

    @Autowired
    AuthorityRepository authorityRepository;

    @Override
    public List<Customer> getCustomers() {

        return customerDao.getCustomers();
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return customerDao.addCustomer(customer);
    }

    @Override
    public Customer findById(int id) {
        return customerDao.findById(id);
    }

    @Transactional
    @Override
    public Customer addCustomer(RegisterEntity registerEntity) {
        Authority authority;
        if (registerEntity.getRole().equals("Admin")){
            authority =
                    authorityRepository.findByName(AuthorityName.ROLE_ADMIN);
        }else{
            authority =
                    authorityRepository.findByName(AuthorityName.ROLE_USER);
        }
        Customer customer = registerEntity.getCustomer();
        User user = User.builder().username(registerEntity.getUsername())
                .password(registerEntity.getPassword())
                .firstname(customer.getName())
                .lastname("default surnmae")
                .email("default @default")

                .lastPasswordResetDate(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()))
                .authorities(Arrays.asList(authority))
                .enabled(true)
                .build();
        customer = customerDao.addCustomer(customer);
        user = userRepository.save(user);
        student.setUser(user);
        user.setStudent(student);

        Hibernate.initialize(student.getUser());
        Hibernate.initialize(student.getAuthorities());
        return student;
    }

}
