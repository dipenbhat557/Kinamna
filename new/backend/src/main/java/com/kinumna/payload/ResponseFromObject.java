package com.kinumna.payload;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.kinumna.model.Address;
import com.kinumna.model.Cart;
import com.kinumna.model.Category;
import com.kinumna.model.Product;
import com.kinumna.model.ProductOptionGroup;
import com.kinumna.model.ProductVariant;
import com.kinumna.payload.responses.AddressResponse;
import com.kinumna.payload.responses.CartResponse;
import com.kinumna.payload.responses.CategoryResponse;
import com.kinumna.payload.responses.ImageResponse;
import com.kinumna.payload.responses.ProductDTO;
import com.kinumna.payload.responses.ProductOptionDTO;
import com.kinumna.payload.responses.ProductOptionGroupResponse;
import com.kinumna.payload.responses.ProductVariantDTO;

@Component
public class ResponseFromObject {

    public AddressResponse getAddressResponse(Address address){
        AddressResponse response = new AddressResponse();

        response.setId(address.getId());
        response.setHouseNo(address.getHouseNo());
        response.setStreet(address.getStreet());
        response.setCity(address.getCity());
        response.setDistrict(address.getDistrict());
        response.setState(address.getState());
        response.setPinCode(address.getPinCode());
        response.setLandmark(address.getLandmark());
        response.setPrimary(address.isPrimary());
        response.setUserId(address.getUser().getUserId());

        return response;
    }

    public CartResponse getCartResponse(Cart cart){
        CartResponse response = new CartResponse();

        response.setId(cart.getCartId());
        response.setUserId(cart.getUser().getUserId());

        return response;
    }

    public CategoryResponse getCategoryResponse(Category category){
        CategoryResponse response = new CategoryResponse();

        response.setCategoryId(category.getCategoryId());
        response.setCategoryName(category.getCategoryName());
        response.setParentCategoryId(category.getParentCategory().getCategoryId());
        response.setImage(category.getImage());

        return response;
    }

    // Method to map Product and ProductVariant entities to DTOs
    public ProductDTO mapToProductDTO(Product product, List<ProductVariant> productVariants) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductId(product.getProductId());
        productDTO.setName(product.getName());
        productDTO.setDescription(product.getDescription());

        if (product.getCategory() != null) {
            productDTO.setCategoryId(product.getCategory().getCategoryId());
            productDTO.setCategoryName(product.getCategory().getCategoryName());
        }

        if (product.getBrand() != null) {
            productDTO.setBrandId(product.getBrand().getBrandId());
            productDTO.setBrandName(product.getBrand().getName());
        }

        List<ProductVariantDTO> variantDTOs = productVariants.stream()
                .map(this::mapToVariantDTO)
                .collect(Collectors.toList());
        productDTO.setVariants(variantDTOs);

        return productDTO;
    }

    public ProductOptionGroupResponse getOptionGroup(ProductOptionGroup productOptionGroup){
        ProductOptionGroupResponse response = new ProductOptionGroupResponse();

        response.setId(productOptionGroup.getId());
        response.setName(productOptionGroup.getName());
        response.setProductOptionIds(productOptionGroup.getProductOptions().stream().map(option-> option.getId()).collect(Collectors.toList()));

        return response;
    }

    // Method to map ProductVariant entity to DTO
    public ProductVariantDTO mapToVariantDTO(ProductVariant variant) {
        ProductVariantDTO variantDTO = new ProductVariantDTO();
        variantDTO.setVariantId(variant.getVariantId());
        variantDTO.setSku(variant.getSku());
        variantDTO.setPrice(variant.getPrice());
        variantDTO.setStock(variant.getStock());
        variantDTO.setProductId(variant.getProduct().getProductId());
        variantDTO.setProductName(variant.getProduct().getName());

        if (variant.getStore() != null) {
            variantDTO.setStoreId(variant.getStore().getId());
            variantDTO.setStoreName(variant.getStore().getName());
        }

        List<ProductOptionDTO> optionDTOs = variant.getProductOptions().stream()
                .map(option -> new ProductOptionDTO(option.getId(), option.getName(),
                        option.getProductOptionGroup().getId(), option.getProductOptionGroup().getName()))
                .collect(Collectors.toList());
        variantDTO.setProductOptions(optionDTOs);

        List<ImageResponse> imageDTOs = variant.getImages().stream()
                .map(image -> new ImageResponse(image.getId(), image.getImage()))
                .collect(Collectors.toList());
        variantDTO.setImages(imageDTOs);

        return variantDTO;
    }
}
