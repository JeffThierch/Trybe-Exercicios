USE sakila;

SELECT rating, SUM(replacement_cost) AS custo_total_de_substituicao
FROM film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.50