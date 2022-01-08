USE PiecesProviders;

SELECT * FROM Provides
WHERE Provider = 'RBT';

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

SELECT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;

SELECT Code, Name, Provider, Price FROM Pieces, Provides
WHERE Code = Piece AND Provider = 'HAL'
ORDER BY Price DESC;

SELECT COUNT(Piece) FROM Provides
WHERE Piece = 1; 
