USE hr;

SELECT 
JOB_ID, SUM(SALARY) AS 'Salario Total'  FROM employees
GROUP BY JOB_ID;