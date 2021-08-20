#!/bin/bash

delay=2

# Exercicio - 1

echo -e "\nCriando o diretorio unix_tests"

mkdir unix_tests

echo -e "\nNavegando para diretorio unix_tests"

cd unix_tests

sleep $delay

# Exercicio - 2

echo -e "\nCriando arquivo trybe.txt"

touch trybe.txt

# Exercicio - 3

echo -e "\nCriando uma copia de trybe.txt com o nome trybe_backup.txt"

cp trybe.txt trybe_backup.txt

sleep $delay

# Exercicio 4

echo -e "\nRenomenado/movendo o arquivo trybe.txt para trybe_renamed.txt"

mv trybe.txt trybe_renamed.txt

sleep $delay

# Exercicio 5 

echo -e "\nCriando o diretorio backup"

mkdir backup

sleep $delay

# Exercicio 6

echo -e "\nMovendo o arquivo trybe_backup.txt para o diretorio backup"

mv trybe_backup.txt backup

sleep $delay

# Exercicio 7

echo -e "\nCriando diretorio backup2"

mkdir backup2

sleep $delay

# Exercicio 8

echo -e "\nMovendo o arquivo trybe_backup.txt do diretorio backup para diretorio backup2"

mv backup/trybe_backup.txt backup2

sleep $delay

# Exercicio 9

echo -e "\nApagando o diretorio backup"

rmdir backup

sleep $delay

# Exercicio 10

echo -e "\nRenomeando o diretorio backup2 para backup"

mv backup2 backup

sleep $delay

# Exercicio 11

echo -e "\nMostando o path atual e listando todos os arquivos dentro dele"

pwd

ls -a

sleep $delay

# Exercicio - 12

echo -e "\nApagando o diretorio backup"

rm -rf backup

sleep $delay

# Exercicio - 13

echo -e "\nLimpando o terminal dentro de $delay segundos"

sleep $delay

clear

# Exercicio - 14

echo -e "\nCriando arquivo skills.txt atraves da parte grafica"

cp ../skills.txt skills.txt

echo -e "\nMostrando as 5 primeiras skills do arquivo skills.txt"

cat skills.txt | head -5

sleep $delay

# Exercicio - 15

echo -e "\nMostrando as 4 ultimas skills do arquivo skills.txt"

cat skills.txt | tail -4

# Exercicio - 16

echo -e "\nApagando todos os arquivos que terminam com .txt"

rm -rf *.txt

sleep $delay








