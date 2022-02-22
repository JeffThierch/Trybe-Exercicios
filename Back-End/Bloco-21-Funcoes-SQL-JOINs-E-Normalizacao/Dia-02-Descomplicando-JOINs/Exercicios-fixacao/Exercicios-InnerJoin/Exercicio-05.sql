USE sakila;

SELECT customer.first_name, COUNT(address.address) AS quant_address
FROM customer AS customer
INNER JOIN address AS address ON customer.address_id = address.address_id
WHERE customer.active = 1
GROUP BY customer.customer_id
ORDER BY customer.first_name DESC;
 