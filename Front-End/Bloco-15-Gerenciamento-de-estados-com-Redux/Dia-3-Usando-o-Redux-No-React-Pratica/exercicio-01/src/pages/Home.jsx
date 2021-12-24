import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <section className='Home-container'>
        <div className='Home-login-container'>
          <h1 className='Home-login-title'>Customer Control</h1>
          <Link to='/login'>
            <button className='Home-login-btn'>Login</button>
          </Link>
        </div>
      </section>
      </>
    )
  }
}
