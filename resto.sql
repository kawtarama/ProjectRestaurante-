-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for restau
DROP DATABASE IF EXISTS `restau`;
CREATE DATABASE IF NOT EXISTS `restau` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `restau`;

-- Dumping structure for table restau.client
DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` bigint(20) NOT NULL,
  `datecreation` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.client: ~2 rows (approximately)
DELETE FROM `client`;
INSERT INTO `client` (`id`, `datecreation`, `email`, `full_name`, `telephone`) VALUES
	(1, '2023-09-06 22:29:47.000000', 'toto@gmail.com', 'toto', '0666666'),
	(2, '2023-09-06 22:29:47.000000', 'gigi@gmail.com', 'gigi', '088888');

-- Dumping structure for table restau.client_seq
DROP TABLE IF EXISTS `client_seq`;
CREATE TABLE IF NOT EXISTS `client_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.client_seq: ~0 rows (approximately)
DELETE FROM `client_seq`;
INSERT INTO `client_seq` (`next_val`) VALUES
	(1);

-- Dumping structure for table restau.menu
DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.menu: ~2 rows (approximately)
DELETE FROM `menu`;
INSERT INTO `menu` (`id`, `name`) VALUES
	(1, 'MENU'),
	(2, 'FER');

-- Dumping structure for table restau.menu_seq
DROP TABLE IF EXISTS `menu_seq`;
CREATE TABLE IF NOT EXISTS `menu_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.menu_seq: ~0 rows (approximately)
DELETE FROM `menu_seq`;
INSERT INTO `menu_seq` (`next_val`) VALUES
	(1);

-- Dumping structure for table restau.personne
DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `id_pers` int(100) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(10) NOT NULL,
  `mot_passe` varchar(10) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `tel` int(50) NOT NULL,
  PRIMARY KEY (`id_pers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.personne: ~0 rows (approximately)
DELETE FROM `personne`;

-- Dumping structure for table restau.stock
DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `id` bigint(20) NOT NULL,
  `produit` varchar(255) DEFAULT NULL,
  `contact_fornisseur` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `fornisseur` varchar(255) DEFAULT NULL,
  `quantite` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.stock: ~0 rows (approximately)
DELETE FROM `stock`;

-- Dumping structure for table restau.stock_seq
DROP TABLE IF EXISTS `stock_seq`;
CREATE TABLE IF NOT EXISTS `stock_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.stock_seq: ~0 rows (approximately)
DELETE FROM `stock_seq`;
INSERT INTO `stock_seq` (`next_val`) VALUES
	(351);

-- Dumping structure for table restau.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL,
  `datecreation` datetime(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.user: ~0 rows (approximately)
DELETE FROM `user`;

-- Dumping structure for table restau.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `datecreation` datetime(6) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.users: ~2 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `username`, `password`, `datecreation`, `role`, `email`, `full_name`) VALUES
	(1, 'ali@gmail.com', 'azerty', '2023-09-12 23:55:26.000000', 'admin', 'ali@gmail.com', 'ALI AMARA'),
	(2, 'adil@gmail.com', 'qsdfg', NULL, 'serv', 'adil@gmail.com', 'adil sibari');

-- Dumping structure for table restau.users_seq
DROP TABLE IF EXISTS `users_seq`;
CREATE TABLE IF NOT EXISTS `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.users_seq: ~0 rows (approximately)
DELETE FROM `users_seq`;
INSERT INTO `users_seq` (`next_val`) VALUES
	(1);

-- Dumping structure for table restau.user_seq
DROP TABLE IF EXISTS `user_seq`;
CREATE TABLE IF NOT EXISTS `user_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table restau.user_seq: ~0 rows (approximately)
DELETE FROM `user_seq`;
INSERT INTO `user_seq` (`next_val`) VALUES
	(1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
