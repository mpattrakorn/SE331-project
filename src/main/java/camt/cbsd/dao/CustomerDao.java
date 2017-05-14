package camt.cbsd.dao;

import camt.cbsd.entity.Customer;
import camt.cbsd.entity.Customer;

import java.util.List;

/**
 * Created by Administrator on 13/5/2560.
 */
public interface CustomerDao {

    List<Customer> getCustomers();
    Customer findById(int id);
    Customer addCustomer(Customer customer);
    Integer size();

}
