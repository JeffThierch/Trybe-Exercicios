USE sakila;

SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username)
VALUES
('MR HANK', 'ABC', 3, '123@hotmail.com', 2, 1, 'Hank'),
('LORD BOLTON', 'BOLTON', 1, 'abc@hotmail.com', 1, 0, 'Bolton')
;
SELECT * FROM staff;
