import './App.css';

import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';

export default class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Form/>
      </>
    );
  }
}
