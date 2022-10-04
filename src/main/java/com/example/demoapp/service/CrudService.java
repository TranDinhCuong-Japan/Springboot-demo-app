package com.example.demoapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demoapp.model.CrudModel;
import com.example.demoapp.repository.CrudRepository;

import java.util.List;

@Service
public class CrudService {
    
    @Autowired
    CrudRepository crudRepo; 

    // Creat
    public CrudModel creatEmp(CrudModel emp){
        return crudRepo.save(emp);
    }

    // Read
    public List<CrudModel> getEmp(){
        return crudRepo.findAll();
    }

    //Delete
    public void deleteEmp(Long empId){
        crudRepo.deleteById(empId);
    }

    // Update
    public CrudModel updateEmp(long empId, CrudModel empModel){
        CrudModel emp = crudRepo.findById(empId).get();
        emp.setAge(emp.getAge());
        emp.setName(empModel.getName());
        emp.setAdress(empModel.getAdress());
        return crudRepo.save(emp);
    }
}
