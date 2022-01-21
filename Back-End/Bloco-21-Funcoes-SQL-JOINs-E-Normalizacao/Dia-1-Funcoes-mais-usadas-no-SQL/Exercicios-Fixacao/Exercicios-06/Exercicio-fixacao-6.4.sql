USE sakila;

SELECT district, SUM(address + address2)
FROM address
GROUP BY district
ORDER BY SUM(address + address2) DESC;