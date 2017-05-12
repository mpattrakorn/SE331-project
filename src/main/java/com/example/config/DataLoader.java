package com.example.config;

import com.example.dao.ProductDao;
import com.example.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Administrator on 17/4/2560.
 */
@ConfigurationProperties(prefix="server")
@Component
public class DataLoader implements ApplicationRunner {
    ProductDao productDao;

    @Autowired
    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }

    String baseUrl;
    String imageUrl;
    String imageBaseUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    @Transactional
    public void run(ApplicationArguments args) throws Exception {
        imageBaseUrl = baseUrl + imageUrl;
        Product product1 = Product.builder().id(1).name("NB Minimus 40 Trainer").description("Run and train your way in the multi-tasking New Balance Minimus 40 cross trainer.")
                .image("NB40.jpg").price(3500).amount(12).rate(4.5).build();

        Product product2 = Product.builder().id(2).name("NIKE PRESTO FLY").description("A remake of the 2000 original, the Nike Presto Fly Men's Shoe delivers a T-shirt-like feel for your foot, with a breathable, incredibly flexible upper.")
                .image("NikePF.jpg").price(3200).amount(20).rate(3.8).build();

        productDao.addProduct(product1);
        productDao.addProduct(product2);
    }
}