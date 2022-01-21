USE sakila;

UPDATE actor 
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM actor
ORDER BY first_name ASC;