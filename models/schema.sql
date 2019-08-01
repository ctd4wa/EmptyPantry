DROP database IF EXISTS emptypantry;

CREATE DATABASE IF NOT EXISTS emptypantry;  

use emptypantry;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT  EXISTS  users (
  userEmail   varchar(100),
  PRIMARY KEY (userEmail))
  ENGINE=InnoDB;

-- Dumping structure for table database.recipes
DROP TABLE IF EXISTS likes;

CREATE TABLE IF NOT EXISTS likes (
  likeID          int NOT NULL AUTO_INCREMENT,
  L_title         varchar(250) NOT NULL,
  L_source_url    varchar(250),
  L_image_url     varchar(250), 
  l_like_Email    varchar(100),
  PRIMARY KEY (likeID),
  FOREIGN KEY (l_like_Email) 
  REFERENCES users (userEmail) 
  ON UPDATE CASCADE
  ON DELETE CASCADE)
  ENGINE=InnoDB;
  
DROP TABLE IF EXISTS saveForLater;

CREATE TABLE IF NOT  EXISTS saveForLater(
  saveID         int    (10)  NOT NULL AUTO_INCREMENT,
  S_title         varchar(250) NOT NULL,
  S_source_url    varchar(250),
  S_image_url     varchar(250), 
  S_userEmail         varchar(100),
  PRIMARY KEY (saveID),
  FOREIGN KEY (S_userEmail) 
  REFERENCES users (userEmail) 
  ON UPDATE CASCADE
  ON DELETE CASCADE)
  ENGINE=InnoDB;
  
  
 