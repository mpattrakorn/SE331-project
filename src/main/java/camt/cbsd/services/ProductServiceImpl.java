package camt.cbsd.services;

import camt.cbsd.dao.ProductDao;
import camt.cbsd.entity.Product;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
@Service
@ConfigurationProperties(prefix = "server")
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDao productDao;


    String imageServerDir;

    public void setImageServerDir(String imageServerDir) {
        this.imageServerDir = imageServerDir;
    }

    @Transactional
    public List<Product> getProducts() {
        List<Product> products = productDao.getProducts();
        return products;
    }

    @Override
    @Transactional
    public Product findById(long id) {
        Product product = productDao.findById(id);

        return product;
    }

    @Override
    public Product addProduct(Product product) {
        return productDao.addProduct(product);
    }

    @Override
    public Product removeProduct(long id) {
        return productDao.removeProduct(id);
    }


    @Override
    @Transactional
    public List<Product> queryProduct(String query) {
        if (query == null || query.equals(""))
            return productDao.getProducts();
        return productDao.getProducts(query);
    }



}
