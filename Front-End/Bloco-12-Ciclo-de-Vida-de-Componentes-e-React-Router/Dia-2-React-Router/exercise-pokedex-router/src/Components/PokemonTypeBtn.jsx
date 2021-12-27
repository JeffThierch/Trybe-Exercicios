import React, { Component } from "react";

class PokemonTypeBtn extends Component {
  render () {
    const {filterPokemonType, filterPokemon} = this.props
    return (
      <div className="type-btn-container">
            {
              filterPokemonType().map((type) => (
                <button className="btn-type" key={type} value={type} onClick={filterPokemon}>{type}</button>
              ))
            }
          </div>
    );
  }
}

export default PokemonTypeBtn;
