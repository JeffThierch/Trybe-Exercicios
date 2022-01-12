USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'Gr%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;