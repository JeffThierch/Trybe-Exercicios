import React, { Component } from 'react'
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor () {
    super()
    this.state = {
      nome: '',
      email: '',
      comidaFavorita: '',
      sobre: '',
      ePalmeirense: false,
      formularioComErros: true
    }
    this.handleChanges = this.handleChanges.bind(this);
    this.handleError = this.handleError.bind(this);
    this.fileInput = React.createRef()
  }

  handleChanges({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    }, () => { this.handleError(); });
  }

  handleError() {
    const { nome, email, comidaFavorita } = this.state
    const errorCases = [
      !nome.length,
      !email.length,
      !comidaFavorita.length
    ]

    const completedForm = errorCases.every((error) => error !== true)

    console.log(!completedForm)

    this.setState({
      formularioComErros: !completedForm
    })

  }


  render() {
    const { nome, email, comidaFavorita, sobre } = this.state
    return (
      <form className="form">

        <Input
          label="Nome:"
          type="text"
          id="nome"
          onChange={ this.handleChanges }
          value={ nome }
          handleError = { this.handleError }
        />

        <Input
          label="Email:"
          type="email"
          id="email"
          onChange={ this.handleChanges }
          value={ email }
        />

        <Select 
          label="Comida Favorita: "
          id="comidaFavorita"
          onChange={ this.handleChanges }
          value={ comidaFavorita }
        />  

        <label for="checkbox-input">
          E palmeirense? 
          <input type="checkbox" id="checkbox-input" name="ePalmeirense" onChange={this.handleChanges}></input>
        </label>
        <label for="input-file">
          Insira uma foto:
          <input type="file"  id="input-file" ref={this.fileInput}/>
        </label>

        <textarea placeholder="Fale um pouco sobre voce" name="sobre" onChange={this.handleChanges} value={ sobre }></textarea>
    </form>
    )
  }
}

export default Form
