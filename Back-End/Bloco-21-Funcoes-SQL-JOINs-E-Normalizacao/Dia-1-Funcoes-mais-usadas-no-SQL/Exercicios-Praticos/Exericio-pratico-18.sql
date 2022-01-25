USE hr;

SELECT
FIRST_NAME
LAST_NAME,
DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS 'Dias que Trabalha na Empresa'
FROM employees;
