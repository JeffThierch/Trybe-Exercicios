import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateCustomerInfo from '../components/CreateCustomerInfo';


class CreateCustomer extends Component {
  render() {
    const {isAuth} = this.props
    return (
      <>
        {!isAuth ? 'Login não efetuado' : <CreateCustomerInfo/>}
      </>
    )
  }
}

CreateCustomer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.userAuth.isAuthenticated
});


export default connect(mapStateToProps, null)(CreateCustomer);
