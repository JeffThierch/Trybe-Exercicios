import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';
import {digimon} from './helpers/mock'

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    render(<Digimon digimon={digimon[0]} />)
    const digimonName = screen.getByTestId('digimonName')
    const digimonLevel = screen.getByTestId('digimonLevel')
    const digimonImage = screen.getByRole('img', {  name: /agumon/i})

    expect(digimonName).toBeInTheDocument()
    expect(digimonLevel).toBeInTheDocument()
    expect(digimonImage).toBeInTheDocument()
    expect(digimonImage).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/agumon.jpg')
    expect(digimonImage).toHaveAttribute('alt', 'Agumon')
   
  });
});
