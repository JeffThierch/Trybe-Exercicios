import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {regCustomer} from '../actions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class CreateCustomerInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      email: '',
      isButtonDisabled: true
    }
  }

  handleChange = ({target: {value, name}}) => {
    this.setState({
      [name]: value
    }, () => this.authFields())
  }

  createCustomer = () => {
    const {regCustomer, listOfCustomers} = this.props
    const {name, age, email} = this.state
    const id = listOfCustomers.length + 1
    
    this.setState({
      age: '',
      name: '',
      email: '',
      isButtonDisabled: true
    })

    regCustomer(name, age, email, id);
  }

  authFields = () => {
    const { name, age, email } = this.state
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    const ERROR_CASES = [
      name.length === 0,
      !isNaN(name),
      isNaN(Number(age)),
      age.length === 0,
      !regexEmail.test(email)
    ]
    const haveError = ERROR_CASES.every((error) => error === false)
    this.setState({
     isButtonDisabled: !haveError 
    })
  }
  
  render() {
    const {isButtonDisabled,} = this.state
    const { name, age, email } = this.state
    return (
      <>
        <h1>Cadastro De Clientes</h1>
        <form>
          <div>
            <input type="text" name='name' value={name} placeholder='Nome' onChange={this.handleChange}/>
          </div>
          <div>
            <input type="text" name='age' value={age} placeholder='Idade' onChange={this.handleChange}/>
          </div>
          <div>
            <input type="email" name='email' value={email} placeholder='Email' onChange={this.handleChange}/>
          </div>
          <button 
            type='button' 
            disabled={isButtonDisabled} 
            onClick={this.createCustomer}>Cadastrar</button>
        </form>
        <Link to='/clientes'>
          <button>Clientes Cadastrados</button>
        </Link>
      </>
    )
  }
}

CreateCustomerInfo.propTypes = {
  regCustomer: PropTypes.func.isRequired,
  listOfCustomers: PropTypes.arrayOf(PropTypes.any)
};

const mapStateToProps = (state) => ({
  listOfCustomers : state.customersReg
})

const mapDispatchToProps = (dispatch) => ({
  regCustomer: (name, age, email, id) => dispatch(regCustomer(name, age, email, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerInfo)
