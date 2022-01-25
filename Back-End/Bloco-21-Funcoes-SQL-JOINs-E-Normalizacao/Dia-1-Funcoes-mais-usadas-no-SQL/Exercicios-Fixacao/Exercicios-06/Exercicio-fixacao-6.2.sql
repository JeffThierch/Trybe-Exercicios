USE sakila;

SELECT store_id, COUNT(first_name) AS 'Quantidade', active
FROM customer
GROUP BY store_id, active
ORDER BY store_id, active DESC;