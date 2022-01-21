USE Pixar;

DELETE FROM BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Movies
WHERE length_minutes < 100;

SELECT * FROM Movies
WHERE length_minutes < 100;
