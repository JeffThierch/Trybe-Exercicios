import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <nav className='header-itens'>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
        </nav>
      </header>
    )
  }
}
