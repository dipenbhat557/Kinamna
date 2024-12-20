package com.kinumna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kinumna.payload.responses.AddressResponse;
import com.kinumna.payload.requests.AddressInput;
import com.kinumna.service.AddressService;

@RestController
@RequestMapping("/api/v1/address")
public class AddressController {
    
    @Autowired
    private AddressService addressService;

    @GetMapping("/{id}")
    public ResponseEntity<AddressResponse> getAddress(@PathVariable Integer id) {
        return new ResponseEntity<>( this.addressService.findById(id),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<AddressResponse>> listAddresses() {
        return new ResponseEntity<>( addressService.findAll(),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<AddressResponse> createAddress(@RequestBody AddressInput input) {
        return new ResponseEntity<>( addressService.save(input),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity< AddressResponse> updateAddress(@PathVariable Integer id, @RequestBody  AddressInput input) {
        return ResponseEntity.ok(this.addressService.updateAddress(id, input)) ;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity< Boolean> deleteAddress(@PathVariable Integer id) {
        return ResponseEntity.ok( this.addressService.deleteById(id));
    }

    @PutMapping("/primary/{id}")
    public ResponseEntity<String> addPrimaryAddress(@PathVariable Integer id){
        return ResponseEntity.ok(this.addressService.setPrimaryAddress(id));
    }
}
