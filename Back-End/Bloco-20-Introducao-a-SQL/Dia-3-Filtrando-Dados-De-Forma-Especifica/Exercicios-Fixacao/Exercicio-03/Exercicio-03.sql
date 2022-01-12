USE sakila;

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

SELECT	COUNT( * ) FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';