import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header className= "header-container">
        <h1 className= "title">Pokedex</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
