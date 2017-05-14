package com.example.services;

import com.example.dao.ProductDao;
import com.example.entity.Product;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 16/4/2560.
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

    @Override
    public List<Product> getProducts() {
        return productDao.getProducts();
    }

    @Override
    public Product addProduct(Product product) {
        return productDao.addProduct(product);
    }

    @Override
    public Product findById(long id) {
        return productDao.findById(id);
    }
}
