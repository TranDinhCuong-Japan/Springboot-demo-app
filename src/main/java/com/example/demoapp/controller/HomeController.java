package com.example.demoapp.controller;
import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {

	 	@GetMapping("/")
	    public String homepage() {
	        return "index";  // Trả về trang index.html
	    }
}
