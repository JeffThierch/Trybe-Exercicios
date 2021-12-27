  import React from 'react';
  import { render, screen } from '@testing-library/react';
  import userEvent from '@testing-library/user-event';
  import App from './App';
  
  // Alguns describe já possuem a orientação do que precisa ser testado.
  // Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
  // das casas. 
  // A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

  describe("Comportamento de cada casa", () => {
    test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {

      const {getByTestId, getAllByAltText, queryByAltText} = render(<App />);

      // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
      // Aqui está simulando o clique em uma casa

      userEvent.click(getByTestId('cell_0'));
      expect(getAllByAltText('X')).toHaveLength(1);
      expect(queryByAltText('O')).toBeNull();

      // Foi testado apenas um clique em uma casa
      // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado. 

    });
  
    test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
      render(<App />)
      userEvent.click(screen.getByTestId('cell_0'))
      userEvent.click(screen.getByTestId('cell_1'))
      expect(screen.getAllByAltText('X')).toHaveLength(1);
      expect(screen.getAllByAltText('O')).toHaveLength(1);
    });

    test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {
      render(<App />)
      userEvent.click(screen.getByTestId('cell_0'))
      userEvent.click(screen.getByTestId('cell_0'))
      expect(screen.queryAllByAltText('O')).toHaveLength(0);
    });

    test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {
      render(<App />)
      userEvent.click(screen.getByTestId('cell_0'))
      userEvent.click(screen.getByTestId('cell_1'))
      userEvent.click(screen.getByTestId('cell_2'))
      expect(screen.getAllByRole('img', { name: /x/i })).toHaveLength(2)
      expect(screen.getAllByRole('img', { name: /o/i })).toHaveLength(1)
    });

    test("O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {
      render(<App />)
      userEvent.click(screen.getByTestId('cell_0'))
      userEvent.click(screen.getByTestId('cell_0'))
      expect(screen.getAllByRole('img', { name: /x/i })).toHaveLength(1)
      expect(screen.queryAllByRole('img', { name: /o/i })).toHaveLength(0)
    });
  });
