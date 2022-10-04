package com.example.demoapp.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demoapp.model.CrudModel;
import com.example.demoapp.repository.CrudRepository;

import static org.junit.jupiter.api.Assertions.assertFalse;

import java.util.List;;

@SpringBootTest
public class HomeControllerTest {

    @Autowired
    CrudRepository crudRepo;

    @Test
    void testReadEmp() {

        List<CrudModel> listEmp = crudRepo.findAll();

        System.out.println("List size: "+listEmp.size());

        assertFalse(listEmp.isEmpty());

     }
}
