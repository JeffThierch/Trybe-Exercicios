USE Pixar;

DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE id = 11;

SELECT * FROM Movies;