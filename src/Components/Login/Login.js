import React, {Component} from 'react';
import './Login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }
  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='cancel-menu' onClick={() => this.props.handleLoginModal()}>X</div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.props.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='text' onChange={(e) => this.props.handleInput('password', e)}/>
          </div>
        </div>
      </div>
    )
  }
}