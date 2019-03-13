import React, {Component} from 'react';
import './Register.scss';

export default class Register extends Component {
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
          <div className='cancel-menu' onClick={() => this.props.handleRegisterModal()}>X</div>
          <div className='each-input'>
            <p>Name: </p>
            <input  type='text' onChange={(e) => this.props.handleInput('name', e)}/>
          </div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.props.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='password' onChange={(e) => this.props.handleInput('password', e)}/>
          </div>
        </div>
      </div>
    )
  }
}