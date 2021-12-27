import React, { Component } from 'react'

export default class NextBtn extends Component {
  render() {
    const {nextPokemon, previousPokemon, pokemonsByType} = this.props
    return (
      <div className="next-btn-container">
          <button onClick={() => nextPokemon(pokemonsByType)} className="next-btn">
              <svg xmlns="http://www.w3.org/2000/svg" className="right-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          </button>
          
          <button onClick={() => previousPokemon(pokemonsByType)} className="previous-btn">
          <svg xmlns="http://www.w3.org/2000/svg"       className="left-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          </button>
    </div>
    )
  }
}
