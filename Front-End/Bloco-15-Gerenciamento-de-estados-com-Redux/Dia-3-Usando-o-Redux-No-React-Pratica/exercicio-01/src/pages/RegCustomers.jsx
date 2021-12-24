import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import RegCustomersInfo from '../components/RegCustomersInfo';


class RegCustomers extends Component {
  render() {
    const {isAuth} = this.props
    return (
      <>
        {!isAuth ? 'Login não efetuado': <RegCustomersInfo/>}

      </>
    )
  }
}

RegCustomers.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: state.userAuth.isAuthenticated
});


export default connect(mapStateToProps, null)(RegCustomers)
