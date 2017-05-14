package camt.cbsd.services;

import camt.cbsd.entity.Product;

import java.util.List;

/**
 * Created by Administrator on 16/4/2560.
 */

public interface ProductService {

    List<Product> getProducts();
    Product addProduct(Product product);
    Product findById(long id);

}
