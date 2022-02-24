CREATE DATABASE IF NOT EXISTS albuns;

CREATE TABLE EstilosMusicais (
	Estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    Estilo_name VARCHAR(100) NOT NULL
);

CREATE TABLE Bandas (
	Banda_id INT PRIMARY KEY AUTO_INCREMENT,
    Banda_name VARCHAR(100) NOT NULL,
    Albuns INT NOT NULL,
    EstiloMusical_id INT,
    FOREIGN KEY (EstiloMusical_id) REFERENCES EstilosMusicais(Estilo_id)
    
);

CREATE TABLE Albuns (
	Album_id INT PRIMARY KEY AUTO_INCREMENT,
    Album_name VARCHAR(100) NOT NULL,
    EstiloMusical_id INT NOT NULL,
    Ano_Lancamento INT NOT NULL,
	Banda_id INT NOT NULL,
    Preco DECIMAL,
    FOREIGN KEY (EstiloMusical_id) REFERENCES EstilosMusicais(Estilo_id),
    FOREIGN KEY (Banda_id) REFERENCES Bandas(Banda_id)
);

CREATE TABLE Musicas (
	Musica_id INT PRIMARY KEY AUTO_INCREMENT,
    Musica_name VARCHAR(50) NOT NULL,
    Album_id INT NOT NULL,
    Banda_id INT NOT NULL,
    Duracao INT NOT NULL,
    FOREIGN KEY (Album_id) REFERENCES Albuns(Album_id),
    FOREIGN KEY (Banda_id) REFERENCES Bandas(Banda_id)
);

