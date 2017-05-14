package camt.cbsd.dao;

import camt.cbsd.entity.Customer;
import camt.cbsd.repository.CustomerRepository;
import jersey.repackaged.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Administrator on 13/5/2560.
 */

@Repository
public class CustomerDaoDBImpl implements CustomerDao {


    CustomerRepository customerRepository;

    @Autowired
    public void setCustomerRepository(CustomerRepository customerRepository){
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Customer> getCustomers() {
        return Lists.newArrayList(customerRepository.findAll());
    }

    @Override
    public Customer findById(int id) {
        return customerRepository.findById(id);
    }

    @Override
    public Customer addCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Integer size() {
        return (int) customerRepository.count();
    }
}
