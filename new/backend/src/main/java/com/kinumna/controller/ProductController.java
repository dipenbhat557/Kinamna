package com.kinumna.controller;

import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.kinumna.model.Product;
import com.kinumna.service.ProductService;

import java.util.List;

@Controller
public class ProductController {

    @Autowired
    private ProductService productService;

    @QueryMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @QueryMapping
    public Product getProductById(int productId) {
        return productService.getProductById(productId);
    }

    @MutationMapping
    public Product createProduct(String name, String description, Double price, int categoryId) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        // Set category by fetching it using categoryId from CategoryRepository (not shown here)
        return productService.createProduct(product);
    }

    @MutationMapping
    public Product updateProduct(int productId, String name, String description, Double price, int categoryId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            product.setName(name);
            product.setDescription(description);
            product.setPrice(price);
            // Set category by fetching it using categoryId from CategoryRepository (not shown here)
            return productService.updateProduct(productId, product);
        }
        return null;
    }

    @MutationMapping
    public boolean deleteProduct(int productId) {
        productService.deleteProduct(productId);
        return true;
    }
}