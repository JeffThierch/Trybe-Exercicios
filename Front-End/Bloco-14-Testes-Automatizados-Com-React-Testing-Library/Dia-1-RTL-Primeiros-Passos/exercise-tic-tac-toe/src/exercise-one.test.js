import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Configuração inicial do jogo", () => {
  test('Verificar se foi renderizada nove casas', () => {
    render(<App />)
    const cells = screen.getAllByTestId(/cell_/i)
    expect(cells.length).toBe(9)
  });

  test('Começar com todos os espaços em branco.', () => {
    render(<App />)
    const cells = screen.getAllByTestId(/cell_/i)
    cells.forEach((cell) => (
      expect(cell.value).toBeUndefined()
    ))
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    render(<App />)
    const text = screen.queryByText(/Fim de jogo/i)
    expect(text).not.toBeInTheDocument()
  });
});
