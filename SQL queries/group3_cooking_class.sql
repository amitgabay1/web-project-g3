CREATE TABLE `cooking_class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `phone_number` varchar(45) NOT NULL,
  `group_size` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('amitgabay@gmail.com', 'amit', 'gabay', 52856755, 1);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('bibi@gmail.com', 'bibi', 'netanyhu', 123445085, 74);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('efratdubi@live.com', 'efrat', 'dubi', 528915155, 14);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('gilibom@gmail.com', 'gili', 'bom', 526534155, 5);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('gogalll@gmail.com', 'tom', 'ben', 524444155, 3);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('kereng@gmail.com', 'keren', 'gidoen', 526534322, 5);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('lioribak', 'lior', 'ribak', 54952038, 7);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('noakirel', 'noa', 'kirel', 526348340, 30);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('orel@gmail.com', 'or', 'ganor', 528923455, 8);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('taleran@gmail.com', 'tal', 'eran', 456539854, 10);
INSERT INTO cooking_class (email, first_name, last_name, phone_number, group_size) VALUES ('tamar@gmail.com', 'tamar', 'gold', 545615198, 2);