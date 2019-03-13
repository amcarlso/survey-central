import React, {Component} from 'react';
import './Register.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  register = async () => {
    console.log(this.props);
    const { name, email, password } = this.state;
    if (name === '' || email === '' || password === '') {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You must fill out all areas!',
        timer: 1500
      })
    }
    let res = await axios.post('/auth/register', {name, email, password});
    if (res.data.message) {
      return console.log(res.data.message);
    } else if (res.data.user) {
      this.setState({name: '', email: '', password: ''});
      this.props.history.push('/dashboard');
    }
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
          <div className='register-button' onClick={() => this.register()}>Register</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);