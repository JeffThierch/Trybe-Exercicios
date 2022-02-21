USE sakila;

SELECT 
CONCAT(customer.first_name, " ", customer.last_name) AS customer_name,
customer.email,
address.address_id,
address.address,
address.district
FROM customer AS customer
INNER JOIN address AS address
ON customer.address_id = address.address_id
WHERE address.district = 'California' 
AND customer.first_name LIKE '%rene%'
;
 