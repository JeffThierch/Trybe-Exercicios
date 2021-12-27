import renderWithRedux from "./helpers";
import React from "react";
import { screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import Cars from '../Cars'
import userEvent from "@testing-library/user-event";

describe("Testa o componente TrafficSignal", () => {

  beforeEach(cleanup)
  it("Verifica se todos os botoes estao no documento", () => {
    renderWithRedux(<Cars />,)
    const changeColorBtn = screen.getAllByTestId('move-car-btn')
    expect(changeColorBtn).toHaveLength(3);

    changeColorBtn.forEach(btn => {
      expect(btn).toHaveTextContent(/move/i)
    })
  })
  it("Verifica se o carro muda de posicao", () => {
    renderWithRedux(<Cars />,)
    const changeColorBtn = screen.getAllByTestId('move-car-btn')
    expect(changeColorBtn).toHaveLength(3);
    userEvent.click(changeColorBtn[0])
    expect(screen.getAllByTestId('car-image')[0]).toHaveAttribute('class', 'car-right')

    userEvent.click(changeColorBtn[1])
    expect(screen.getAllByTestId('car-image')[1]).toHaveAttribute('class', 'car-right')
    
    userEvent.click(changeColorBtn[2])
    expect(screen.getAllByTestId('car-image')[2]).toHaveAttribute('class', 'car-right')
  })
  it("Verifica se o carro comeca com a na especificada", () => {
    const {store} = renderWithRedux(<Cars />, 
      {initialState:{moveCar:{cars: {red: true}}}}
      );
      const carRed = store.getState().moveCar.cars.red
      expect(carRed).toBeTruthy()
      const changeColorBtn = screen.getAllByTestId('move-car-btn')
      expect(changeColorBtn).toHaveLength(3);
      expect(screen.getAllByTestId('car-image')[0]).toHaveAttribute('class', 'car-right')
  })
})

