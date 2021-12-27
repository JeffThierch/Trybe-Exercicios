import React, { Component } from 'react'
import pokemons from "../data";
import Pokemon from "../Components/Pokemon";
import NextBtn from "../Components/NextBtn";
import PokemonTypeBtn from '../Components/PokemonTypeBtn';

export default class Home extends Component {
  constructor () {
    super();
    this.state = {
      pokemonIndex: 0,
      type: "All Pokemons"
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.previousPokemon = this.previousPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
  }

  nextPokemon (pokemons) {
    if (this.state.pokemonIndex < (pokemons.length - 1)) {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex + 1
      }));
    } else {
      this.setState({
        pokemonIndex: 0
      });
    }
  }

  previousPokemon (pokemons) {
    if (this.state.pokemonIndex <= 1){
        this.setState(() => ({
          pokemonIndex: (pokemons.length )
      }))
    }
    if (this.state.pokemonIndex <= (pokemons.length - 1)) {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex - 1
      }));
    }
  }

  filterPokemonType () {
    return ['All Pokemons', ...new Set(pokemons.map(({ type }) => (type)))];
  }

  filterPokemon (event) {
    this.setState({
      pokemonIndex: 0,
      type: event.target.value
    });
  }

  pokemonsByType () {
    return pokemons.filter((pokemon) => {
      if (this.state.type === "All Pokemons") {
        return true;
      }
      return this.state.type === pokemon.type;
    });
  }

  render () {
    return (
      <>
     
      <main className="content-container">
          <Pokemon 
            pokemons = {this.pokemonsByType()[this.state.pokemonIndex]} 
          />
          <PokemonTypeBtn 
            filterPokemonType={this.filterPokemonType} 
            filterPokemon={this.filterPokemon} 
          />
          <NextBtn
            nextPokemon={this.nextPokemon}
            previousPokemon={this.previousPokemon}
            pokemonsByType={this.pokemonsByType()}
          />
        </main>
     
      </>
    );
  }
}
