package camt.cbsd.services;

import camt.cbsd.entity.Customer;
import camt.cbsd.entity.RegisterEntity;
import camt.cbsd.entity.Customer;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 14/5/2560.
 */
public interface CustomerService {
    List<Customer> getCustomers();
    Customer addCustomer(Customer customer);
    Customer findById(int id);

    @Transactional
    Customer addCustomer(RegisterEntity registerEntity);
}
