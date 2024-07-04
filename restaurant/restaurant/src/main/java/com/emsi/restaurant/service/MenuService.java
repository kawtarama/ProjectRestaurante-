package com.emsi.restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emsi.restaurant.business.Menu;
import com.emsi.restaurant.repository.MenuRepository;

@Service
public class MenuService {

	@Autowired
	MenuRepository menuRepository;
	
	public List<Menu> getAllMenu() {
		return menuRepository.findAll();
	}

}
