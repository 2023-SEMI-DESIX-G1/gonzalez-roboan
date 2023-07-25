CREATE DATABASE  IF NOT EXISTS `proyecto_final` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyecto_final`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_final
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producto` varchar(45) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `cantidad` int NOT NULL,
  `precio` double NOT NULL,
  `imagen` varchar(700) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (32,'HP ProBook 440 G9 – 14.0','HP',' HD, Intel Core i5-1235U a 4.4GHz, 8GB DDR4, 512GB SSD, Webcam, WiFi, Bluetooth, Gráficos Intel Iris Xe, Windows 11 Pro 64 bits, Español',24,895.9,'/HP Pavilion 15-eh1509la.jpg','Laptop'),(33,'Laptop HP 14z-fq1000- 14',' HP',' HD ,AMD Ryzen 3 5300U a 3.8GHz, 8GB DDR4, 256GB SSD, Gráficos AMD Radeon, Windows 11 Home, Inglés + Antivirus Karspesky GRATIS',34,450.9,'/HP Pavilion 15-eh1509la.jpg','Laptop '),(34,'HP Pavilion 15-eh1509la',' HP','15.6″ HD, AMD Ryzen 5 5 5500U a 2.1GHz, 8GB DDR4, 512GB SSD, Windows 11 Home 64-bits, Español + Mochila HP Renew 15.6″ Azul ',26,659.9,'/HP Pavilion 15-eh1509la.jpg','Laptop'),(35,'Lenovo IdeaPad Flex 5 ','lenovo','Táctil Full HD, Intel Core i3-1115G4 a 3.0GHz, 4GB DDR4, 128GB SSD, Webcam, WiFi, Bluetooth, Gráficos Intel UHD, Windows 11 Home 64-bit, Inglés, Gris',8,455.9,'/Lenovo IdeaPad Flex 5.jpeg','Laptop'),(36,'Dell Inspiron 15 3511 – 15.6 ','Dell','FHD, Intel Core i5-1135G7 a 2.40GHz, 8GB DDR4, 256GB SSD, Gráficos Iris Xe, Webcam, WiFi, Bluetooth, Windows 11 Home 64-bits, Español, Plateado',10,675.9,'/Dell Inspiron 15 3511.jpg','Laptop'),(37,'Dell Inspiron 14 5410 2 en 1','Dell','Intel Core i5-1155G7 a 2.5GHz, 14″ Táctil, 8GB DDR4, 256GB SSD, WiFi, Bluetooth , HDMI , USB, Windows 11 home 64-bits, Español, Plateado',11,829.9,'/Dell Inspiron14 5410.jpeg','Laptop'),(38,'Lenovo IdeaPad – 14','Lenovo',' Intel Core i3-1215U a 1.2GHz, 4GB DDR4, 128GB SSD, Webcam, WiFi, Bluetooth, Gráficos Intel UHD, Windows 11 Home 64-bit, Inglés, Gris',13,359.9,'/Lenovo IdeaPad – 14.jpeg','Laptop'),(39,'Lenovo ThinkBook 15 Gen 2 ','Lenovo','Full HD, Intel Core i5-1135G7 a 2.40GHz, 16GB DDR4, 256GB SSD, Webcam, WiFi, Bluetooth, Gráficos Intel Iris Xe, Windows 11 Pro 64-bit, Español',31,990.8,'/Dell Inspiron 15 3511.jpg','Laptop');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `trn` int NOT NULL,
  `cedula` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin','admin@gmail.com','123456',123,'8-888-8888');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'proyecto_final'
--

--
-- Dumping routines for database 'proyecto_final'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-23 23:14:51
