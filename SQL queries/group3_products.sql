CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO products (product_name, price, img) VALUES ('אמפנדס בשר', 35, '../../../static/media/meat_empanadas.PNG');
INSERT INTO products (product_name, price, img) VALUES ('אמפנדס גבינה', 23, '../../../static/media/cheese_empanadas.PNG');
INSERT INTO products (product_name, price, img) VALUES ('אמפנדס שוקולד', 18, '../../../static/media/chocolate_empanadas.PNG');
INSERT INTO products (product_name, price, img) VALUES ('אמפנדס תירס', 18, '../../../static/media/corn_empanadas.PNG');
INSERT INTO products (product_name, price, img) VALUES ('אמפנדס תרד', 24, '../../../static/media/spinach_empanadas.PNG');