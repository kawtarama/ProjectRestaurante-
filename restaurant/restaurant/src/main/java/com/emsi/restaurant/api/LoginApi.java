package com.emsi.restaurant.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emsi.restaurant.business.Menu;
import com.emsi.restaurant.business.User;
import com.emsi.restaurant.service.UsersService;
import com.emsi.restaurant.vo.LoginVo;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/login")
public class LoginApi {
	
	@Autowired
	UsersService usersService;
	
	@PostMapping()
	public ResponseEntity<?> login(@RequestBody LoginVo login) {
		User user = usersService.getUserByUsersname(login.getUsername());
		if(user != null && user.getPassword().equals(login.getPassword())) {
			return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
		
	}
}
