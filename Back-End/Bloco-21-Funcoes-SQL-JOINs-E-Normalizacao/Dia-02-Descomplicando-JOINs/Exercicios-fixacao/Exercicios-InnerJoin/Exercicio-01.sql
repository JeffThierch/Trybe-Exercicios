USE sakila;

SELECT A.actor_id, 
CONCAT(A.first_name, ' ' , A.last_name) AS actor_name, 
F.film_id
FROM film_actor AS F
INNER JOIN actor AS A
ON A.actor_id = F.actor_id;
 