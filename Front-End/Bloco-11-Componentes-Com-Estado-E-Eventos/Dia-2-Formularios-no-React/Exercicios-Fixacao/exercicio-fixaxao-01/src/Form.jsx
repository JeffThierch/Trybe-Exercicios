import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      nome: '',
      email: '',
      comidaFavorita: '',
      sobre: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFavoriteFoodChange = this.handleFavoriteFoodChange.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      nome: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleFavoriteFoodChange (event) {
    this.setState({
      comidaFavorita: event.target.value
    })
  }

  handleAboutChange (event) {
    this.setState({
      sobre: event.target.value
    })
  }

  render() {
    return (
      <form className="form">
        <label for="nome">Nome</label>
        <input type="text" id="nome" onChange={this.handleNameChange} value={this.state.nome}></input>
        <label for="email">Email</label>
        <input id="email" type="email" onChange={this.handleEmailChange} value={this.state.email}></input>
        <label for="comida-favorita">Comida Favorita</label>
        <select id="comida-favorita" onChange={this.handleFavoriteFoodChange} value={this.state.comidaFavorita}>
          <option>Escolha uma: </option>
          <option>Hamburger</option>
          <option>Pizza</option>
          <option>Lasanha</option>
        </select>
        <textarea placeholder="Fale um pouco sobre voce" onChange={this.handleAboutChange} value={this.state.sobre}></textarea>
    </form>
    )
  }
}

export default Form
