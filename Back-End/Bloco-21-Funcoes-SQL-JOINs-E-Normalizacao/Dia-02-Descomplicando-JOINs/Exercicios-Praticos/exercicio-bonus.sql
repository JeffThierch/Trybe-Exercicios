USE Pixar;

SELECT 
	movies.*
FROM
	BoxOffice AS movies
INNER JOIN 
	BoxOffice AS rating
ON
	movies.movie_id = rating.movie_id
WHERE
	rating.rating > 8;