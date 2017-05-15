package camt.cbsd.dao;

import camt.cbsd.entity.Product;

import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
public interface ProductDao {
    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product Product);
    List<Product> getProducts(String searchText);

}
