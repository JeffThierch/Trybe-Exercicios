USE hr;

SELECT EMPLOYEE_ID,
FIRST_NAME,
DAY(HIRE_DATE) AS 'Dia Contratacao' 
FROM employees;
