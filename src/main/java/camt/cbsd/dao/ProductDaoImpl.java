package camt.cbsd.dao;

import camt.cbsd.entity.Product;
import camt.cbsd.repository.ProductRepository;
import jersey.repackaged.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
@Repository
public class ProductDaoImpl implements ProductDao {


    List<Product> products;
    String baseUrl;
    String imageUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    String imageBaseUrl;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    public void setProductRepository(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getProducts() {
        return Lists.newArrayList(productRepository.findAll());

    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> getProducts(String searchText) {
        return productRepository.findByNameIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(searchText, searchText);
    }

    @Override
    public Product removeProduct(long id) {
        System.out.println("ok");
        return productRepository.deleteProductById(id);
    }


}
