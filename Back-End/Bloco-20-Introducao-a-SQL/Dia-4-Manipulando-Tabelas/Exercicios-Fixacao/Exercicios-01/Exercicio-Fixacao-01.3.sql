USE sakila;

INSERT INTO actor (first_name, last_name)
SELECT fist_name, last_name FROM customer
LIMIT 5;
SELECT * FROM actor;
