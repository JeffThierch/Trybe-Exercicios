import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const winnerSymbols = ['X', 'O'];

winnerSymbols.forEach((winnerSymbol) => {
  describe(`Condições de vitória para o Jogador ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = (cellId) => {
      if (cellId >= 0 && cellId <= 2) return 3;
      if (cellId >= 3 && cellId <= 5) return 6;
      return 0;
    };

    const firstCellsOfLines = [0, 3, 6];
    firstCellsOfLines.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da linha a partir da casa ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        const { getByTestId, queryByText } = render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          userEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(getByTestId(`cell_${cellId}`));
        userEvent.click(getByTestId(`cell_${opponentsLine}`));
        userEvent.click(getByTestId(`cell_${cellId + 1}`));
        userEvent.click(getByTestId(`cell_${opponentsLine + 1}`));
        userEvent.click(getByTestId(`cell_${cellId + 2}`));
        const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
        expect(queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
      });
    });

    const getStartOfAnotherColumn = (cellId) => {
      if (cellId === 0 || cellId === 3 || cellId === 6) return 1;
      if (cellId === 1 || cellId === 4 || cellId === 7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da coluna ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        const { getByTestId, queryByText } = render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          userEvent.click(getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(getByTestId(`cell_${cellId}`));
        userEvent.click(getByTestId(`cell_${opponentsColumn}`));
        userEvent.click(getByTestId(`cell_${cellId + 3}`));
        userEvent.click(getByTestId(`cell_${opponentsColumn + 3}`));
        userEvent.click(getByTestId(`cell_${cellId + 6}`));
        const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
        expect(queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
      });
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal esquerda para direita (primeira,quinta,nona casa)', () => {
      const { getByTestId, queryByText } = render(<App />);

      if (winnerSymbol === 'O') userEvent.click(getByTestId('cell_5'));
      userEvent.click(getByTestId('cell_0'));
      userEvent.click(getByTestId('cell_2'));
      userEvent.click(getByTestId('cell_4'));
      userEvent.click(getByTestId('cell_3'));
      userEvent.click(getByTestId('cell_8'));
      const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
      expect(queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal direita para esquerda (terceira,quinta,sétima casa)', () => {
      const { getByTestId, queryByText } = render(<App />);

      if (winnerSymbol === 'O') userEvent.click(getByTestId('cell_5'));
      userEvent.click(getByTestId('cell_0'));
      userEvent.click(getByTestId('cell_2'));
      userEvent.click(getByTestId('cell_4'));
      userEvent.click(getByTestId('cell_3'));
      userEvent.click(getByTestId('cell_8'));
      const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
      expect(queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
    });
  });

  describe('bonus', () => {
    test('Empatar um jogo', () => {

    });

    test('Reiniciar um jogo em empate', () => {

    });

    test('Reiniciar um jogo no meio da partida', () => {

    });

    test('Reiniciar um jogo ganho pelo jogador X', () => {

    });

    test('Reiniciar um jogo ganho pelo jogador O', () => {

    });
  });
});
