USE sakila;

SELECT COUNT(first_name) ,active
FROM customer
GROUP BY active;