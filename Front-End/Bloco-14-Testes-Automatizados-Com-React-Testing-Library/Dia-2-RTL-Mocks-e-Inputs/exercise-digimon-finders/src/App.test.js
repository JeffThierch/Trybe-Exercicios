import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { digimon } from './helpers/mock';
import userEvent from '@testing-library/user-event';

describe('Teste da aplicação toda', () => {
  
  afterEach(() => jest.clearAllMocks())
  it('renders App', async () => {
    render(<App />)
    const searchInput = screen.getByTestId('search-input')
    const searchBtn = screen.getByTestId('search-button')
    const searchMsg = screen.getByRole('heading', {  name: /faça uma pesquisa/i})

    expect(searchInput).toBeInTheDocument()
    expect(searchInput).toHaveValue('')
    expect(searchBtn).toBeInTheDocument()
    expect(searchBtn).toHaveTextContent('Search Digimon')
    expect(searchMsg).toBeInTheDocument()
  });
  it('Verifica se fetch foi chamado e retorna o digimon correto', async () => {
    global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve(digimon)}))
    render(<App />)
    const searchInput = screen.getByTestId('search-input')
    const searchBtn = screen.getByTestId('search-button')
    userEvent.type(searchInput, 'Agumon')
    userEvent.click(searchBtn)

    const digimonName = await screen.findByTestId('digimonName')
    const digimonLevel = screen.getByTestId('digimonLevel')
    const digimonImage = screen.getByRole('img', {  name: /agumon/i})
    
    expect(digimonName).toBeInTheDocument()
    expect(digimonLevel).toBeInTheDocument()
    expect(digimonImage).toBeInTheDocument()
    expect(digimonImage).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/agumon.jpg')
    expect(digimonImage).toHaveAttribute('alt', 'Agumon')

    expect(global.fetch).toHaveBeenCalled()
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith( 'https://digimon-api.vercel.app/api/digimon/name/Agumon')
  })

  it('Verifica se retorna o erro caso o digimon nao exista', async () => {
    const ErrorMsg = 'Oloco Bicho is not a Digimon in our database.';
    global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve({ErrorMsg})}))

    render(<App />)

    const searchInput = screen.getByTestId('search-input')
    const searchBtn = screen.getByTestId('search-button')
    userEvent.type(searchInput, 'oloco Bicho')
    userEvent.click(searchBtn)

    const error = await screen.findByRole('heading', {  name: /oloco bicho is not a digimon in our database\./i})
    expect(error).toBeInTheDocument()
  })

  it('Verifica se o fetch  e chamado quando o input esta vazo', () => {
    render(<App />)
    const searchInput = screen.getByTestId('search-input')
    const searchBtn = screen.getByTestId('search-button')
    userEvent.type(searchInput, '')
    expect(searchInput).toHaveValue('')
    userEvent.click(searchBtn)
    expect(global.fetch).toHaveBeenCalledTimes(0)
    expect(global.fetch).not.toHaveBeenCalled()
  })
});
