USE sakila;

SELECT filmActor.actor_id,
CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name, 
filmActor.film_id,
film.title
FROM film_actor AS filmActor
INNER JOIN actor AS actor ON actor.actor_id = filmActor.actor_id
INNER JOIN film AS film ON film.film_id = filmActor.film_id;
 