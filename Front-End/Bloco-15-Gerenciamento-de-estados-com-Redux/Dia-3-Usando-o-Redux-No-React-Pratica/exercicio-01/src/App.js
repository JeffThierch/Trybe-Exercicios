import React, { Component } from 'react'
import './styles/App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import RegCustomers from './pages/RegCustomers';
import CreateCustomer from './pages/CreateCustomer';

export default class App extends Component {
  render() {
    return (
      <main className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/clientes' component={RegCustomers} />
          <Route exact path='/criar' component={CreateCustomer} />
        </Switch>
      </main>
    )
  }
}

