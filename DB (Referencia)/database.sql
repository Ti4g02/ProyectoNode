CREATE DATABASE IF NOT EXISTS *nombre bd*;

USE *nombre bd*;

CREATE TABLE *nombre de la tabla*(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) DEFAULT NULL,
    salary INT(6) DEFAULT NULL,
    PRIMARY KEY (id)
);

show tables;

describe *nombre de la tabla*;

INSERT INTO *nombre de la tabla* VALUES 
    (1, "Santiago", 8000),
    (2, "Luis", 6000),
    (3, "Maria", 7000),
    (4, "Max", 4000);

SELECT * FROM *nombre de la tabla*;

/* ver solo un elemento*/
SELECT * FROM *nombre de la tabla* WHERE id = #;

/* Eliminar */
DELETE FROM *nombre de la tabla* WHERE id = #;