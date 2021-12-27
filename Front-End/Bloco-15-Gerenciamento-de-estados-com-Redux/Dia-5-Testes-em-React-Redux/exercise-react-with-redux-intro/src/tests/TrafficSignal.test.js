import renderWithRedux from "./helpers";
import React from "react";
import { screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
import TrafficSignal from '../TrafficSignal'
import userEvent from "@testing-library/user-event";

describe("Testa o componente TrafficSignal", () => {

  beforeEach(cleanup)
  it("Verifica se todos os botoes do semaforo estao no documento", () => {
    renderWithRedux(<TrafficSignal />,)
    const changeColorBtn = screen.getAllByTestId('change-signal-color-btn')
    expect(changeColorBtn).toHaveLength(3);
    expect(changeColorBtn[0]).toHaveTextContent(/red/i)
    expect(changeColorBtn[1]).toHaveTextContent(/yellow/i)
    expect(changeColorBtn[2]).toHaveTextContent(/green/i)
  })
  it("Verifica se o semaforo muda de cor", () => {
    renderWithRedux(<TrafficSignal />,)
    const changeColorBtn = screen.getAllByTestId('change-signal-color-btn')
    expect(changeColorBtn).toHaveLength(3);
    userEvent.click(changeColorBtn[0])
    expect(screen.getByTestId('signal-image')).toHaveAttribute('src', 'redSignal.jpeg')

    userEvent.click(changeColorBtn[1])
    expect(screen.getByTestId('signal-image')).toHaveAttribute('src', 'yellowSignal.jpeg')
    
    userEvent.click(changeColorBtn[2])
    expect(screen.getByTestId('signal-image')).toHaveAttribute('src', 'greenSignal.jpeg')
  })
  it("Verifica se o semaforo comeca com a cor especificada", () => {
    const {store} = renderWithRedux(<TrafficSignal />, 
      {initialState:{changeSignalColor:{color: 'green'}}}
      );

    const color = store.getState().changeSignalColor.color;
    expect(color).toBe('green')
    expect(screen.getByTestId('signal-image')).toHaveAttribute('src', 'greenSignal.jpeg')
  })
})

