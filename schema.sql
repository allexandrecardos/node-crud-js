CREATE DATABASE IF NOT EXISTS cursos;

USE cursos;

CREATE TABLE IF NOT EXISTS tutoriais(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) DEFAULT NULL,
    description varchar(255) DEFAULT NULL,
    published boolean DEFAULT 1 NULL,
    PRIMARY KEY (id)
);
