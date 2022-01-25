USE hr;

SELECT
UPPER(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS 'Employee Name'
FROM employees;
