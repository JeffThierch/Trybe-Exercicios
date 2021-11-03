import React, { Component } from 'react';


class Button extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => console.log(this.props.log)
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  };
}

export default Button;
