USE Pixar;

SELECT 
	theater.*, movies.*
FROM
	Theater AS theater
LEFT JOIN 
	Movies AS movies
ON
	theater.id = movies.theater_id
ORDER BY
	theater.name ASC;