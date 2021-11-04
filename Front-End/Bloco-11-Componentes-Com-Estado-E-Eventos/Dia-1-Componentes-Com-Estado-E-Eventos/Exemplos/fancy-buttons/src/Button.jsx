import React, { Component } from 'react';


class Button extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clicks: 0
    }
  }

  handleClick(event) {
    this.setState((prevState, _props) => ({
      clicks: prevState.clicks + 1
    }))

    if (this.state.clicks % 2 !== 0) {
      console.log(event.target.style.backgroundColor)
      event.target.style.backgroundColor = 'green'
    } else {
      console.log(event.target.style.backgroundColor)
      event.target.style.backgroundColor = 'white'
    }
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name} clicks recebidos: {this.state.clicks}</button>
    );
  };
}

export default Button;
