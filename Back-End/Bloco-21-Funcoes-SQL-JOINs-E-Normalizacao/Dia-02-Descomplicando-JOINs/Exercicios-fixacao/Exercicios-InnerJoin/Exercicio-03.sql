USE sakila;

SELECT 
customer.customer_id,
CONCAT(customer.first_name, " ", customer.last_name) AS customer_name,
customer.email,
address.address_id,
address.address
FROM customer AS customer
INNER JOIN address AS address
ON customer.address_id = address.address_id
ORDER BY customer_name DESC
LIMIT 100;
 