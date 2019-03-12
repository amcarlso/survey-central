import React, {Component} from 'react';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='number' onChange={(e) => this.handleInput('password', e)}/>
          </div>
        </div>
      </div>
    )
  }
}