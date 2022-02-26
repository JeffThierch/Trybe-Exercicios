CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;

CREATE TABLE Especies (
	Especie_id INT PRIMARY KEY AUTO_INCREMENT,
    Especie_name VARCHAR(50) NOT NULL
);

CREATE TABLE Sexos (
	Sexo_id INT PRIMARY KEY AUTO_INCREMENT,
    Sexo_name VARCHAR(50) NOT NULL
);

CREATE TABLE Localizacoes (
	Localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    Localizacao_name VARCHAR(50) NOT NULL
);

CREATE TABLE Managers (
	Manager_id INT PRIMARY KEY AUTO_INCREMENT,
    Manager_name VARCHAR(50) NOT NULL,
    Manager_lastname VARCHAR(50) NOT NULL,
    Manager_location INT,
    Contratacao DATE NOT NULL,
    FOREIGN KEY (Manager_location) REFERENCES Localizacoes(Localizacao_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Cuidadores (
	Cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    Cuidador_name VARCHAR(50) NOT NULL,
    Cuidador_lastname VARCHAR(50) NOT NULL,
    Manager_id INT NOT NULL,
    Contratacao DATE NOT NULL,
    FOREIGN KEY (Manager_id) REFERENCES Managers(Manager_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Animais (
	Animal_id INT PRIMARY KEY AUTO_INCREMENT,
    Animal_name VARCHAR(50) NOT NULL,
    Sexo_id INT NOT NULL,
    Especie_id INT NOT NULL,
    Animal_idade INT NOT NULL,
    Localizacao_id INT NOT NULL,
    Cuidador_id INT NOT NULL,
    FOREIGN KEY (Sexo_id) REFERENCES Sexos(Sexo_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (Especie_id) REFERENCES Especies(Especie_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (Localizacao_id) REFERENCES Localizacoes(Localizacao_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (Cuidador_id) REFERENCES Cuidadores(Cuidador_id) ON DELETE RESTRICT ON UPDATE CASCADE
);
