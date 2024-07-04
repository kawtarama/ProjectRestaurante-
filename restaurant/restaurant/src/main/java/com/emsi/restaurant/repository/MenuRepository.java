package com.emsi.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emsi.restaurant.business.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

}
