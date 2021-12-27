import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRoute from './helpers/renderWithRoute'

describe('Testa o Componente App', () => {
  test('Testa se ao clickar nos links o texto correto e exibido', () => {
    const {history} = renderWithRoute(<App />)
    const homeTitle = screen.getByTestId('page-title')
    expect(homeTitle).toBeDefined()
    expect(homeTitle).toHaveTextContent('Home')
    expect(history.location.pathname).toBe('/')

    const aboutLink = screen.getByRole('link', {  name: /sobre/i})
    userEvent.click(aboutLink)
    const aboutTitle = screen.getByTestId('page-title')
    expect(aboutTitle).toBeDefined()
    expect(aboutTitle).toHaveTextContent('About')
    expect(history.location.pathname).toBe('/about')
    history.push('/')

    const projectLink = screen.getByRole('link', {  name: /projetos/i})
    userEvent.click(projectLink)
    const projectTitle = screen.getByTestId('page-title')
    expect(projectTitle).toBeDefined()
    expect(projectTitle).toHaveTextContent('Projects')
    expect(history.location.pathname).toBe('/projects')
    history.push('/')

    const contactLink = screen.getByRole('link', {  name: /contato/i})
    userEvent.click(contactLink)
    const contactTitle = screen.getByTestId('page-title')
    expect(contactTitle).toBeDefined()
    expect(contactTitle).toHaveTextContent('Contact')
    expect(history.location.pathname).toBe('/contact')
    history.push('/')

  });

  test('Testa a pagina Home', () => {
    
  })

})
