package camt.cbsd.dao;

import camt.cbsd.dao.ProductDao;
import camt.cbsd.entity.Product;
import camt.cbsd.repository.ProductRepository;
import jersey.repackaged.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Administrator on 17/4/2560.
 */

@Repository
public class ProductDaoDBImpl implements ProductDao {

    ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @Override
    public Product findByPriceGreaterThanAndPriceLessThan(double lowestPrice,double highestPrice){return productRepository.findByPriceGreaterThanAndPriceLessThan(lowestPrice,highestPrice);}

    @Override
    public List<Product> getProducts() {
        return Lists.newArrayList(productRepository.findAll());
    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product findByName(String name) {
        return productRepository.findByName(name);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Integer size() {
        return (int)productRepository.count();
    }


}
