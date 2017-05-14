package camt.cbsd.repository;

import camt.cbsd.entity.Product;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Administrator on 17/4/2560.
 */
public interface ProductRepository extends CrudRepository<Product,Long> {

    Product findById(Long id);
    Product findByName(String name);

}
