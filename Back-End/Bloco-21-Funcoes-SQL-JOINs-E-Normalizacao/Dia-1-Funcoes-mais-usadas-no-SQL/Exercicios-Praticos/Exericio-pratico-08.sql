USE hr;

SELECT 
JOB_ID, SUM(SALARY) AS salario_programadores  FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';