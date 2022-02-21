USE sakila;

SELECT 
staff.first_name,
staff.last_name,
address.address
FROM staff AS staff
INNER JOIN address AS address
ON staff.address_id = address.address_id;
 