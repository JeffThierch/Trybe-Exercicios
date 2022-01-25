USE hr;

SELECT 
TRUNCATE(MAX(SALARY), 2) AS 'Maior Salario',
TRUNCATE(MIN(SALARY), 2) AS 'Menor Salario',
TRUNCATE(AVG(SALARY), 2) AS 'Media Salarios'
FROM employees;