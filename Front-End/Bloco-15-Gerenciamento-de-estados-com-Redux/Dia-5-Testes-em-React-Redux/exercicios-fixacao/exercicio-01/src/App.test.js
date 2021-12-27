/* eslint-disable testing-library/prefer-presence-queries */
import { screen, cleanup } from '@testing-library/react';
import App from './App';
import renderWithRedux from './helpers/renderWithRedux'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />); /* Valor padrao da aplicacao, segundo parametro omitido */
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });
  test('the page should has a button and a text 5', () => {
    renderWithRedux(<App />, {initialState: {clickReducer: { counter : 10}}}); /* Valor padrao da aplicacao, segundo parametro omitido */
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('10')).toBeInTheDocument();
  });
});