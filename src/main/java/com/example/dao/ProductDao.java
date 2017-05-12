package com.example.dao;

import com.example.entity.Product;

import java.util.List;

/**
 * Created by Administrator on 16/4/2560.
 */
public interface ProductDao {

    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    Integer size();

}
