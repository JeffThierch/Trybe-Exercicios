USE hr;

SELECT 
JOB_ID, COUNT(*) AS Quantidade FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';