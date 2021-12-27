/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import xImage from './x.png';
import oImage from './o.svg';
import './GameCell.css';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, onClick, content } = this.props;
    return (
      <div
        key={ id }
        data-testid={ `cell_${id}` }
        className="game-cell"
        onClick={ onClick }
      >
        {content === 1 ? <img src={ xImage } alt="X" /> : ''}
        {content === 2 ? <img src={ oImage } alt="O" /> : '' }
      </div>

    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.number.isRequired,
};

export default GameCell;
