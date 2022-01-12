USE Scientists;

SELECT * FROM Scientists
WHERE Name LIKE 'A%';

SELECT * FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Name;