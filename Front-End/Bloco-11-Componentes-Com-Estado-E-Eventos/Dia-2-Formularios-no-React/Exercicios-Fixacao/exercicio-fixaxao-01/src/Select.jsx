import React, { Component } from 'react'

class Select extends Component {
  render() {
    const { label , id, onChange, value } = this.props

    return (
      <label htmlFor={ id }>{label}
        <select id={ id } name={ id } onChange={ onChange } value={ value }>
          <option defaultValue hidden value=''>Escolha uma: </option>
          <option>Hamburger</option>
          <option>Pizza</option>
          <option>Lasanha</option>
        </select>
        <span>{ (value === '') ? 'O campo deve ser preenchido' : '' }</span>
        </label>
    )
  }
}

export default Select
