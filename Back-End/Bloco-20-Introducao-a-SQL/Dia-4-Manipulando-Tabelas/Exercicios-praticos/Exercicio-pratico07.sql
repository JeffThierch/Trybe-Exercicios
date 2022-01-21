USE Pixar;

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';

SELECT * FROM Movies;