#!/bin/bash

delay=2

# Exercicio - 1

echo -e "\nAbrindo o diretorio unix_tests"

cd unix_tests

sleep $delay

echo -e "\nBaixando arquivo countries.txt"


curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

sleep $delay

# Exercicio - 2

echo -e "\nMostrando o contrudo do arquivo countries.txt"

sleep $delay

cat countries.txt

sleep $delay

# Exercicio - 3

echo -e "\nMostrando o conteudo do arquivo countries.txt, use as teclas N para ir pra proxima pagina (Next) e P para a anterior (Previous) "

sleep $delay

less countries.txt

# Exercicio - 4

echo -e "\nUse /Zambia para fazer a pesquisa, e a tecla N para ir pra proxima ocorrenca e P para a anterior"

sleep $delay

less countries.txt

sleep $delay

# Exercicio - 5

echo -e "\nBuscando Brazil no arquivo countries.txt"

grep "Brazil" countries.txt

sleep $delay

# Exercicio - 6

echo -e "\nBuscando brazil (lowercase) no arquivo countries.txt"

grep -i "brazil" countries.txt

sleep $delay

# Exercicio - 7

echo -e "\nCriando arquivo phrases.txt"

cp ../phrases.txt phrases.txt

echo -e "\nBuscando no arquivo phrases.txt frases que nao contenham a palavra fox"

sleep $delay

grep -iv "fox" phrases.txt

sleep $delay

# Exercicio - 8

echo -e "\nContando o numero de palavras que existem no arquivo phrases.txt"

sleep $delay

wc -w phrases.txt

sleep $delay

# Exercicio - 9

echo -e "\nContando o numero de linhas do arquivo phrases.txt"

sleep $delay

wc -l phrases.txt

sleep $delay

# Exercicio - 10

echo -e "\nCriando arquivos empty.tbt e empty.pdf"

sleep $delay

touch empty.tbt

touch empty.pdf

sleep $delay

# Exercicio - 11

echo -e "\nListando todos os arquivos do diretorio"

sleep $delay

ls -a

# Exercicio - 12

echo -e "\nListando arquivos que terminem com txt"

sleep $delay

ls *txt

# Exercicio - 13

echo -e "\nListando todos os arquivos que terminem com tbt ou txt"

sleep $delay

ls *txt *tbt

sleep $delay

# Exercicio - 14

echo -e "\n Acessando o manual do comando ls"

sleep $delay

man ls

sleep $delay


