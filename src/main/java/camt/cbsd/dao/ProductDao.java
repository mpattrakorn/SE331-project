package camt.cbsd.dao;

import camt.cbsd.entity.Product;

import java.util.List;

/**
 * Created by Administrator on 16/4/2560.
 */
public interface ProductDao {

    List<Product> getProducts();
    Product findById(long id);
    Product addProduct(Product product);
    Product findByName(String name);
    Product findByPriceGreaterThanAndPriceLessThan(double lowestPrice,double highestPrice);
    Integer size();



}
