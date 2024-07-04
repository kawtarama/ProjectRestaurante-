package com.emsi.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emsi.restaurant.business.User;

public interface UsersRepository extends JpaRepository<User, Long> {
	
	User findByusername(String username);

}
