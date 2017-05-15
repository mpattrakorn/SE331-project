package camt.cbsd.services;

import camt.cbsd.entity.Product;

import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
public interface ProductService {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    List<Product> queryProduct(String query);
}
