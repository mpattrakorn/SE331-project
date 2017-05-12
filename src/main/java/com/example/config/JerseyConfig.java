package com.example.config;

import com.example.controller.ProductController;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Administrator on 16/4/2560.
 */
@Configuration
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        register(ProductController.class);
        register(MultiPartFeature.class);
    }
}
