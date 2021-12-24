import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserInfo extends Component {
  render() {
    const {name, age, email } = this.props
    return (
      <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
