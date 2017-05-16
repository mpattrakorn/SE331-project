package camt.cbsd.repository;

import camt.cbsd.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */

public interface ProductRepository extends CrudRepository<Product,Long> {
    Product findById(Long id);
    List<Product> findByNameIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(String name, String description);
    Product deleteProductById(Long id);
}
