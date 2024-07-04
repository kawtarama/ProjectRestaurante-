package com.emsi.restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emsi.restaurant.business.Stock;
import com.emsi.restaurant.repository.StockRepository;

@Service
public class StockService {

	@Autowired
	StockRepository stockRepository;
	
	public List<Stock> getAllStock() {
		return stockRepository.findAll();
	}

	public Object getSave(Stock stock) {
		if(stock.getId() != null) {
			try {
				Stock stockBO = stockRepository.findById(stock.getId()).get();
				stockBO.setContactFornisseur(stock.getContactFornisseur());
				stockBO.setDescription(stock.getDescription());
				stockBO.setFornisseur(stock.getFornisseur());
				stockBO.setProduit(stock.getProduit());
				stockBO.setQuantite(stock.getQuantite());
				stockRepository.save(stockBO);
			} catch (Exception e) {
				return "ERROR";
			}
		}
		return stockRepository.save(stock);
	}

	public Object delete(Stock stock) {
		try {
			Stock stockBO = stockRepository.findById(stock.getId()).get();
			stockRepository.delete(stockBO);
			stockRepository.flush();
			return "deleted";
		} catch (Exception e) {
			return "ERROR";
		}
	}

}
