package com.example.repository;

import com.example.entity.Product;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Administrator on 17/4/2560.
 */
public interface ProductRepository extends CrudRepository<Product,Long> {

    Product findById(Long id);

}
