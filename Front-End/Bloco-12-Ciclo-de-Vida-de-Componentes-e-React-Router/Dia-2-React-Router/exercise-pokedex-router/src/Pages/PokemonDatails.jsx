import React, { Component } from 'react'
import PokemonMoreDetail from '../Components/PokemonMoreDatail'
import pokemons from '../data'

export default class PokemonDatails extends Component {
  render() {
    const {id} = this.props.match.params
    const data = pokemons.filter((pokemon) => pokemon.id === Number(id))
    console.log(data);
    return (
      <div>
        <PokemonMoreDetail pokemons={data} />
      </div>
    )
  }
}
