package camt.cbsd.repository;

import camt.cbsd.entity.Customer;
import camt.cbsd.entity.Customer;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Administrator on 13/5/2560.
 */
public interface CustomerRepository extends CrudRepository<Customer,Long> {

    Customer findById(int id);
    Customer deleteById(int id);
}
