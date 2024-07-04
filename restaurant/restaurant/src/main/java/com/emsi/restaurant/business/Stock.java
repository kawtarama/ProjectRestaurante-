package com.emsi.restaurant.business;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name="stock")
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String produit;
	private String description;
	private String fornisseur;
	private String contactFornisseur;
	private String quantite;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProduit() {
		return produit;
	}
	public void setProduit(String produit) {
		this.produit = produit;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getFornisseur() {
		return fornisseur;
	}
	public void setFornisseur(String fornisseur) {
		this.fornisseur = fornisseur;
	}
	public String getContactFornisseur() {
		return contactFornisseur;
	}
	public void setContactFornisseur(String contactFornisseur) {
		this.contactFornisseur = contactFornisseur;
	}
	public String getQuantite() {
		return quantite;
	}
	public void setQuantite(String quantite) {
		this.quantite = quantite;
	}

}
