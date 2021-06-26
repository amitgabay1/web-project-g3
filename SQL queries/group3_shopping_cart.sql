CREATE TABLE `shopping_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `order_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `product_id_idx` (`product_id`),
  KEY `order_id_idx` (`order_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (1, 2, 2);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (1, 5, 2);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (1, 6, 3);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (1, 7, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 1, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 2, 3);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 3, 8);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 4, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 6, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 7, 7);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (2, 8, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (3, 1, 4);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (3, 3, 5);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (3, 4, 4);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (3, 5, 3);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (3, 8, 5);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (4, 2, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (4, 4, 2);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (4, 6, 2);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (4, 7, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (4, 8, 8);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (5, 3, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (5, 5, 1);
INSERT INTO shopping_cart (product_id, order_id, quantity) VALUES (5, 8, 4);