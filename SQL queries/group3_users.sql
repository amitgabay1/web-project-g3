CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `full_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SELECT * FROM `web-project-g3`.products;


INSERT INTO users (email, full_name, password) VALUES ('amit@gmail.com', 'amit gabay', '858e585858');
INSERT INTO users (email, full_name, password) VALUES ('carlos@gmail.com', 'carlos moran', '546u4749');
INSERT INTO users (email, full_name, password) VALUES ('dana@walla.co.il', 'dana yoo', '5363g894');
INSERT INTO users (email, full_name, password) VALUES ('efartdubi3@gmail.com', 'efrat dubi', '12345');
INSERT INTO users (email, full_name, password) VALUES ('galiroman@gmail.com', 'gali roman', '2227s227');
INSERT INTO users (email, full_name, password) VALUES ('itamar@gmail.com', 'itamat agever', '393g903');
INSERT INTO users (email, full_name, password) VALUES ('lioribak@walla.co.il', 'lior ribak', '6565678e69');
INSERT INTO users (email, full_name, password) VALUES ('noaron@gmail.com', 'noa ron', '11111t1');
INSERT INTO users (email, full_name, password) VALUES ('orben@gmail.com', 'or ben', '2922e92');