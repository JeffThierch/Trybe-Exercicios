import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    const pokemons = this.props.pokemons
    return (
      <div className = "pokemon-container">
        {pokemons.map(({name, type, averageWeight, image}) => (
          <div className = "pokemon-card">
            <div className = "pokemon-info">
                <p>{name}</p>
                <p className = "pokemon-type">{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
              </div>
              <img src={image} alt="from pokemon"></img>
          </div>
        ))}
      </div>
    )
  }
}

export default Pokemon
