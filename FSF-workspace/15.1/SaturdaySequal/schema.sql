CREATE DATABASE authors_test;
USE authors_test;
CREATE TABLE authors (
 id Int( 11 ) AUTO_INCREMENT NOT NULL,
 firstName VARCHAR( 255) NOT NULL,
 lastName VARCHAR( 255 ) NOT NULL,
 createdAt DATETIME NOT NULL,
 updatedAt DATETIME NOT NULL,
 PRIMARY KEY ( id )
);