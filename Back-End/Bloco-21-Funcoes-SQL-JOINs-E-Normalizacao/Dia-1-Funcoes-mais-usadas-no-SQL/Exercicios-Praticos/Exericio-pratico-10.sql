USE hr;

SELECT
DEPARTMENT_ID,
TRUNCATE(AVG(SALARY), 2) AS media_salarial,
COUNT(*) AS quantidade_funcionarios
FROM employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(*) > 10;