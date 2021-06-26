CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `payer_id` int NOT NULL,
  `order_cost` int NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `id_idx` (`payer_id`),
  CONSTRAINT `payer_id` FOREIGN KEY (`payer_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-01-27 00:00:00', 1, 100);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-02-28 00:18:00', 2, 300);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-04-18 00:23:00', 3, 154);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-05-12 00:22:00', 4, 543);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-01-27 00:00:00', 5, 80);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-01-27 00:00:00', 6, 66);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-01-27 00:00:00', 2, 88);
INSERT INTO orders (date, payer_id, credit_card, cvv, order_cost) VALUES ('2021-01-27 00:00:00', 4, 23);