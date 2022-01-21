USE sakila;

    SELECT rating, AVG(length) AS media_de_duracao
    FROM film
    GROUP BY rating
    HAVING AVG(length) BETWEEN 115.0 AND 121.50;
