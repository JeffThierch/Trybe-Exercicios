import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {authUser} from '../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import '../styles/Login.css'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      passwordLenght: 0,
      haveErrors: true
    }
  }

  changeInputFieldsEvent = ({target: {name, value}}) => {
    if(name === 'userEmail') {
      this.setState({
        [name]: value
      },() =>  this.authUserInfos())
    } else {
      this.setState({
        [name]: value.length
      },() =>  this.authUserInfos())
    }
  }

  authUserInfos = () => {
    const {userEmail, passwordLenght} = this.state
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    const ERRORS_CASE = [
      !emailRegex.test(userEmail),
      passwordLenght === 0
    ]
    const isInputsCorrects = ERRORS_CASE.every((error) => error === false);
    this.setState({
      haveErrors: !isInputsCorrects
    })
  }

  render() {
    const {haveErrors} = this.state
    const {isAuth, changeAuthStatus} = this.props
    if (isAuth) {
      return <Redirect to='/clientes'/>
    }  
    return (
      <>
        <section className='Login-page-container'>
          <div className='Login-form-container'>
            <h1 className='Login-login-title'>Login</h1>
            <form className='Login-form'>
              <div>
                <input 
                type="email" 
                name='userEmail' 
                className='Login-form-input'
                onChange={this.changeInputFieldsEvent} 
                placeholder='Email'/>
              </div>
              <div>
                <input 
                type="password" 
                name='passwordLenght' 
                onChange={this.changeInputFieldsEvent}
                className='Login-form-input'
                placeholder='Senha' 
                autoComplete='true'/>
              </div>
            </form>
            <button 
              type='button' 
              disabled={haveErrors} 
              onClick={changeAuthStatus}
              className='Form-submit-btn'>Logar</button>
          </div>
        </section>
      </>
    )
  }
}

Login.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  changeAuthStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuth: state.userAuth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthStatus: () => dispatch(authUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
