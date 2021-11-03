import React, { Component } from 'react';

const handleClick = () => console.log('tambem clicado')

class Button02 extends Component {
  render() {
    return (
      <button onClick={handleClick}>{this.props.name}</button>
    );
  };
}

export default Button02;
