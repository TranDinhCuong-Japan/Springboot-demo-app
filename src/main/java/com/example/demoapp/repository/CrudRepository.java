package com.example.demoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demoapp.model.CrudModel;

@Repository
public interface CrudRepository extends JpaRepository<CrudModel, Long> {
    
}
