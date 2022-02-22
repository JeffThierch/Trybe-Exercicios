USE Pixar;

SELECT 
	domestic.movie_id, domestic.domestic_sales, inter.international_sales
FROM
	BoxOffice AS domestic
INNER JOIN 
	BoxOffice AS inter
ON
	inter.movie_id = domestic.movie_id
WHERE 
	domestic.international_sales > domestic.domestic_sales;