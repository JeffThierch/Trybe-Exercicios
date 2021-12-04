import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { label ,type, id, onChange, value, } = this.props;

    
    return (
      <label htmlFor={ id }>{ label }
        <input type={ type } id={ id } name={ id } onChange={ onChange } value={ value }></input>
         <span>{ !value.length ? 'O campo deve ser preenchido' : '' } </span>
        </label>
    )
  }
}

export default Input;
