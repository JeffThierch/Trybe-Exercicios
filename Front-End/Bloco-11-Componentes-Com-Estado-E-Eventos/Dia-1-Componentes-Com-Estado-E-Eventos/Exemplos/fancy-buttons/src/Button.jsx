import React, { Component } from 'react';


class Button extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clicks: 0
    }
  }

  handleClick = () => {
    this.setState((prevState, _props) => ({
      clicks: prevState.clicks + 1
    }))
  }
  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name} clicks recebidos: {this.state.clicks}</button>
    );
  };
}

export default Button;
