import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='each-input'>
            <p>Name: </p>
            <input  type='text' onChange={(e) => this.handleInput('name', e)}/>
          </div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='number' onChange={(e) => this.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='text' onChange={(e) => this.handleInput('password', e)}/>
          </div>
        </div>
      </div>
    )
  }
}