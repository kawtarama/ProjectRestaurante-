package com.emsi.restaurant.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emsi.restaurant.service.MenuService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/menu")
public class MenuApi {
	
	@Autowired
	MenuService menuService;
	
	@GetMapping()
	public ResponseEntity<?> getAll() {
		return new ResponseEntity<>(menuService.getAllMenu(), HttpStatus.ACCEPTED);
	}

}
