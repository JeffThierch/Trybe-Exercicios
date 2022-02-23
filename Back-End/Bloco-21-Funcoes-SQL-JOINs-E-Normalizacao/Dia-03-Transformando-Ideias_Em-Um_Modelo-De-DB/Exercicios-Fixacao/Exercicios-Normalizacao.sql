CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE Areas (
	Area_id INT PRIMARY KEY AUTO_INCREMENT,
	Area_Name VARCHAR(50) NOT NULL	
);

INSERT INTO Areas (Area_Name) VALUES 
	("Administração"),
    ("Operacional"),
    ("Estratégico"),
    ("Marketing")
;

CREATE TABLE SubSetores (
	SubSetor_id INT PRIMARY KEY AUTO_INCREMENT,
    SubSetor_name VARCHAR(50) NOT NULL
);

INSERT INTO SubSetores (SubSetor_name) VALUES 
	("Vendas")
;

CREATE TABLE Setores (
	Setor_id INT PRIMARY KEY AUTO_INCREMENT,
    Area_id INT NOT NULL,
    Sub_setor_id INT,
    FOREIGN KEY (Area_id) REFERENCES Areas(Area_id),
    FOREIGN KEY (Sub_setor_id) REFERENCES SubSetores(SubSetor_id)
);

INSERT INTO Setores (Area_id, Sub_setor_id) VALUES
	(1, 1),
	(2, NULL),
	(3, 1),
	(4, NULL)
;

CREATE TABLE Funcionarios (
	Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
	Nome VARCHAR(50) NOT NULL,
	Sobrenome VARCHAR(50) NOT NULL,
	Email VARCHAR(100) NOT NULL,
	Telefone  VARCHAR(20) NOT NULL,
	DataCadastro DATETIME NOT NULL,
	Setor_id INT,
	FOREIGN KEY (Setor_id) REFERENCES Setores(Area_id)
);

INSERT INTO Funcionarios VALUES
	(12, "Joseph", "Rodrigues", "jo@gmail.com", "(35)998552-1445", "2020-05-05 08:50:25", 1),
    (13, "André", "Freeman", "andre1990@gmail.com", "(47)99522-4996", "2020-05-05 08:50:25", 2),
    (14, "Cíntia", "Duval", "cindy@outlook.com", "(33)99855-4669", "2020-05-05 10:55:35", 3),
    (15, "Fernanda", "Mendes", "fernandamendes@yahoo.com", "(33)99200-1556", "2020-05-05 11:45:40", 4)
;
