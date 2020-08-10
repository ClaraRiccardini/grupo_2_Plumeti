-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: plumeti
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `estate` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_product`
--

DROP TABLE IF EXISTS `cart_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_product` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_product`
--

LOCK TABLES `cart_product` WRITE;
/*!40000 ALTER TABLE `cart_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_user`
--

DROP TABLE IF EXISTS `cart_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_user`
--

LOCK TABLES `cart_user` WRITE;
/*!40000 ALTER TABLE `cart_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,1,'login.png'),(2,2,'slider1.jpeg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(45) NOT NULL,
  `composicion` varchar(45) DEFAULT NULL,
  `medidas` varchar(45) NOT NULL,
  `aclaracion` varchar(45) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `img1` varchar(45) DEFAULT NULL,
  `img2` varchar(45) DEFAULT NULL,
  `img3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Jardin naranja',810,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',10,'nuevo','pañuelo','Jardin-estrellado-naranja-1.heic','Jardin-estrellado-naranja-2.heic','Jardin-estrellado-naranja-3.heic'),(2,'jardiness negross',433,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',10,'destacado','pañuelo','Jardin-estrellado-negro-1.heic','Jardin-estrellado-negro-2.heic','Jardin-estrellado-negro-3.heic'),(3,'Orquidea naranja',523,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',12,'destacado','pañuelo','Orquidea-naranja-1.heic','Orquidea-naranja-2.heic','Orquidea-naranja-3.heic'),(4,'Orquidea celeste',444,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',22,'nuevo','pañuelo','Orquidea-celeste-1.heic','Orquidea-celeste-2.heic','Orquidea-celeste-3.heic'),(5,'Orquidea rojo',422,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',31,'nuevo','pañuelo','Orquidea-rojo-1.heic','Orquidea-rojo-2.heic','Orquidea-rojo-3.heic'),(6,'Alegria celeste',456,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',22,'destacado','pañuelo','Alegria-celeste-1.heic','Alegria-celeste-2.heic','Alegria-celeste-3.heic'),(7,'Alegria amarillo',654,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',4,'destacado','pañuelo','Alegria-amarilla-1.heic','Alegria-amarilla-2.heic','Alegria-amarilla-3.heic'),(8,'Boquitas pintadas',810,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',65,'nuevo','pañuelo','Boquitas-pintadas-1.heic','Boquitas-pintadas-2.heic','Boquitas-pintadas-3.heic'),(9,'Cala azul',231,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',22,'destacado','pañuelo','Cala-azul-1.heic','Cala-azul-2.heic','Cala-azul-3.heic'),(10,'Afra azul',222,'Pañuelo sublimado','100% poliester','70x70','Al estamparse puede oscurecer',12,'nuevo','pañuelo','Afra-azul-1.heic','Afra-azul-2.heic','Afra-azul-3.heic'),(14,'Clara',10,'Persona','','172','',1,'nuevo',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL DEFAULT 'sin nombre',
  `usuario` varchar(45) NOT NULL DEFAULT 'sin usuario',
  `contrasenia` varchar(45) NOT NULL DEFAULT 'sin contraseña',
  `email` varchar(45) NOT NULL DEFAULT 'sin email',
  `avatar` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sin nombre','sin usuario','sin contraseña','nuevo@nuevo.com',NULL),(2,'sin nombre','sin usuario','sin contraseña','davidde@gmail.com',NULL),(3,'sin nombre','sin usuario','sin contraseña','davidde@gmail.com',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-24 19:20:12
