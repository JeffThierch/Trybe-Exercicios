USE Pixar;

UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales < 300000000 AND international_sales > 200000000;

SELECT * FROM BoxOffice;