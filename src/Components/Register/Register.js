import React, {Component} from 'react';
import './Register.scss';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  register = async () => {
    console.log(this.state);
    const { name, email, password } = this.state;
    const res = await axios.post('/auth/register', {name, email, password});
    console.log(res.data);
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='cancel-menu' onClick={() => this.props.handleRegisterModal()}>X</div>
          <div className='each-input'>
            <p>Name: </p>
            <input  type='text' onChange={(e) => this.handleInput('name', e)}/>
          </div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='password' onChange={(e) => this.handleInput('password', e)}/>
          </div>
          <div onClick={() => this.register()}>Register</div>
        </div>
      </div>
    )
  }
}