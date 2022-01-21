USE sakila;

SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheco esse filme?'
FROM film;