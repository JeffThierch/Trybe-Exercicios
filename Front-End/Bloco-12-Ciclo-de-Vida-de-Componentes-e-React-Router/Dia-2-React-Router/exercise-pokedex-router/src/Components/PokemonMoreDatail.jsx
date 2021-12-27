import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PokemonMoreDetail.css'

class PokemonMoreDetail extends Component {
  render () {
    const pokemons = this.props.pokemons;
    const { name, type, averageWeight, image, summary, foundAt} = pokemons[0];
    return (
      <>
      <div className = "more-info-container">
          <div className = "pokemon-card">
            <div className = "pokemon-info">
                <p>{name}</p>
                <p className = "pokemon-type">{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
              </div>
            <img src={image} alt="from pokemon"></img>
          </div>
          <div className="infos-container">
              <h1>Summary</h1>
              <p>{summary}</p>  
            <h1>Found At</h1>
            <div className="location-images-container">
              <div className="locations-container">
                  {foundAt.map(({location, map}) => (
                    <>
                      <p>{location}</p>
                      <img className="location-image" src={map} alt={location} />
                    </>
                  ))}
              </div>
            </div>
          </div>
      </div>
      </>
    );
  }
}

PokemonMoreDetail.propTypes = {
  pokemons: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string
}

export default PokemonMoreDetail;
