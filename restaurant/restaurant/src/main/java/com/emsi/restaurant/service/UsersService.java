package com.emsi.restaurant.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emsi.restaurant.business.User;
import com.emsi.restaurant.repository.UsersRepository;

@Service
public class UsersService {

	@Autowired
	UsersRepository usersRepository;
	
	public List<User> getAllUsers() {
		return usersRepository.findAll();
	}
	
	public User getUserByUsersname(String username) {
		return usersRepository.findByusername(username);
	}
	
}
