USE sakila;

SELECT staff.first_name, 
staff.last_name,
AVG(payment.amount) AS avg_payment
FROM staff AS staff
INNER JOIN payment AS payment ON staff.staff_id = payment.staff_id
WHERE YEAR(payment.payment_date) = 2006
GROUP BY staff.staff_id;
 