import React, { Component } from 'react';

const handleClick = () => console.log('fui clicado')

class Button extends Component {
  render() {
    return (
      <button onClick={handleClick}>{this.props.name}</button>
    );
  };
}

export default Button;
