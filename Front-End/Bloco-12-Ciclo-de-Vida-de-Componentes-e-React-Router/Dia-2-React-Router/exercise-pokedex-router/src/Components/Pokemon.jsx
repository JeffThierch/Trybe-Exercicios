import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render () {
    const pokemons = this.props.pokemons;
    const { name, type, averageWeight, image, id } = pokemons;
    return (
      <div className = "pokemon-container">
          <div className = "pokemon-card">
            <div className = "pokemon-info">
                <p>{name}</p>
                <p className = "pokemon-type">{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                <Link to={`/pokemons/${id}`}>
                  <button>More Details</button>
                </Link>
              </div>
              <img src={image} alt="from pokemon"></img>
          </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string
}

export default Pokemon;
