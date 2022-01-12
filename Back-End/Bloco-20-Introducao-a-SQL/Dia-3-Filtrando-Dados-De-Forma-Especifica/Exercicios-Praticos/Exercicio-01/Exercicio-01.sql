USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'Gr%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT * FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';