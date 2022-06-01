-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
create table personagem(
idPersonagem int ,
foreign key (idPersonagem) references usuario(id),
apelido varchar(255),
origem varchar(255)
);
create table pontuacao(
idPersonagem int ,
foreign key (idPersonagem) references usuario(id),
acertos int(2),
erros int(2)
);
