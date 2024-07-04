package com.emsi.restaurant.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emsi.restaurant.business.Stock;
import com.emsi.restaurant.service.StockService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/stock")
public class StockApi {
	
	@Autowired
	StockService stockService;
	
	@GetMapping()
	public ResponseEntity<?> getAll() {
		return new ResponseEntity<>(stockService.getAllStock(), HttpStatus.ACCEPTED);
	}
	
	@PostMapping()
	public ResponseEntity<?> save(@RequestBody Stock stock) {
		System.out.println("save: " + stock.getId());
		return new ResponseEntity<>(stockService.getSave(stock), HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping()
	public ResponseEntity<?> delete(@RequestBody Stock stock) {
		System.out.println("delete: " + stock.getId());
		return new ResponseEntity<>(stockService.delete(stock), HttpStatus.ACCEPTED);
	}

}
