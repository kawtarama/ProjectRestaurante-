package com.emsi.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emsi.restaurant.business.Stock;

public interface StockRepository extends JpaRepository<Stock, Long> {
	
}
