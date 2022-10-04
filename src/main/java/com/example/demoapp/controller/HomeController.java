package com.example.demoapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoapp.service.CrudService;

import com.example.demoapp.model.CrudModel;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {

		@Autowired
	    CrudService crudService;

		@RequestMapping(value = "/employees", method = RequestMethod.GET)
		public List<CrudModel> readEmp(){
			return crudService.getEmp();
		}
}
