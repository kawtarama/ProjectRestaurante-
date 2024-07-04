package com.emsi.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emsi.restaurant.business.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
