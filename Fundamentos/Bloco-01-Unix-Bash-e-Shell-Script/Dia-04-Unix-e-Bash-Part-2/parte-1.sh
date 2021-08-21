#!/bin/bash

delay=2

# Exercicio - 1


echo -e "Abrindo diretorio unix_tests"

cd unix_tests

sleep $delay

# Exercicio - 2

echo -e "\nCriando arquivo skills2.txt"

echo -e "Internet\nUnix\nBash" > skills2.txt

sleep $delay

# Exercicio - 3

echo -e "\nAdicionando 5 linhas ao arquivo skills2.txt"

echo -e "Javascript\nShell\nC++\nCSS\nPython" >> skills2.txt

sleep $delay

# Exercicio - 4


echo -e "\nContando linhas do arquivo skills2.txt"

echo -e "O arquivos skills2.txt tem $(cat skills2.txt | wc -l) linhas"

sleep $delay

# Exercicio - 5

echo -e "\nCriando arquivo top_skills.txt com as 3 primeiras skills do arquivo skills2.txt depois de ordenado alfabeticamente"

cat skills2.txt | sort | head -3 > top_skills.txt

sleep $delay

# Exercicio - 6

echo -e "\nCriando phrases2.txt"

touch phrases2.txt

echo -e "Down For The Count\nDown To The Wire\nA Bite at the Cherry\nEasy As Pie\nJig Is Up" >> phrases2.txt

# Exercicio - 7


echo -e "\nContando o numero de linhas que contem br em phrases2.txt"

echo -e "$(grep -c br phrases2.txt)"

sleep $delay

# Exercicio - 8

echo -e "\nContando o numero de linhas que NÃO contem br em phrases2.txt"

echo -e " $(grep -vc br phrases2.txt)"

sleep $delay

# Exercicio - 9

echo -e "\nAdicionando 2 paises ao final de phrases2.txt"

echo -e "Alemanha\nRussia" >> phrases2.txt

sleep $delay

# Exercicio - 10


echo -e "\nCriando banch_of_things.txt com os conteudos de phrases2.txt e countries.txt"

cat phrases2.txt countries.txt > bunch_of_things.txt

sleep $delay

# Exercicio - 11


echo -e "\nOrdenando arquivo bunch_of_things.txt"

sort -o bunch_of_things.txt bunch_of_things.txt

sleep $delay
