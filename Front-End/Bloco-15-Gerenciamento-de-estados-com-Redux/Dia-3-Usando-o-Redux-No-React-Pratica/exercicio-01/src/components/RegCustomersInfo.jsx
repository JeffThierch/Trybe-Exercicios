import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import UserInfo from './UserInfo'


class RegCustomersInfo extends Component {
  render() {
    const {customersList} = this.props
    console.log(customersList);
    return (
      <>
        <h1>Clientes Cadastrados</h1>
        <Link to='/criar'>
          <button>Cadastro de Clientes</button>
        </Link>
        {customersList.length === 0 ? <div>Nenhum cliente cadastrado</div> : (
          customersList.map(({name, age, email}, index) => (
            <UserInfo key={index + 1} name={name} age={age} email={email}/>
          ))
        )}
      </>
    )
  }
}

RegCustomersInfo.propTypes = {
  customersList: PropTypes.arrayOf(PropTypes.any).isRequired,
}

const mapStateToProps = (state) => ({
  customersList: state.customersReg
});


export default connect(mapStateToProps, null)(RegCustomersInfo)
