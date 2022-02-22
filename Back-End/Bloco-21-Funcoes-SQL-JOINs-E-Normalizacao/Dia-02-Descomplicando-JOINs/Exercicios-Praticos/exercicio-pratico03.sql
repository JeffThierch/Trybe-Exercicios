USE Pixar;

SELECT 
	domestic.movie_id, inter.rating
FROM
	BoxOffice AS domestic
INNER JOIN 
	BoxOffice AS inter
ON
	inter.movie_id = domestic.movie_id
ORDER BY
	inter.rating DESC;