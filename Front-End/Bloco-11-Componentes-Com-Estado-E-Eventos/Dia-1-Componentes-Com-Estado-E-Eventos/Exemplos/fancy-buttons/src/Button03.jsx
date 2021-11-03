import React, { Component } from 'react';

const handleClick = () => console.log('acho que tambem fui clicado')

class Button03 extends Component {
  render() {
    return (
      <button onClick={handleClick}>{this.props.name}</button>
    );
  };
}

export default Button03;
