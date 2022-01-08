USE PiecesProviders;

SELECT * FROM Provides
WHERE Provider = 'RBT';

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;