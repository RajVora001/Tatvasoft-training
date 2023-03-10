import React, { Component } from 'react'
import "./LoginForm.css"

export class LoginForm extends Component {
  render() {
    return (
        <>
          <div className="line">

          </div>
          <div className="header">
            <img src="#" alt="logo" className='logo' /> 
            <a href="#" className='Login'>Login</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="#" className='Login'>Register</a>
            &nbsp;&nbsp;&nbsp;<button className='cart'>Cart</button>
          </div>
          <div className="search">
           <input type="text" name="" placeholder='What are you looking for...' className='searchbox' />
          </div>
          
          
          
        </>
    )
  }
}

export default LoginForm