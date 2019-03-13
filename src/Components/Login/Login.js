import React, {Component} from 'react';
import './Login.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  login = async () => {
    const { email, password } = this.state;
    const res = await axios.post('/auth/login', {email: email, password: password});
    if (email === '' || password === '') {
      return Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You must fill out all areas!',
        timer: 1500
      })
    }
    if (res.data.message) {
      return console.log(res.data.message);
    } else if (res.data.user) {
      this.setState({name: '', email: '', password: ''});
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='cancel-menu' onClick={() => this.props.handleLoginModal()}>X</div>
          <div className='each-input'>
            <p>Email: </p>
            <input  type='text' onChange={(e) => this.handleInput('email', e)}/>
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  type='password' onChange={(e) => this.handleInput('password', e)}/>
          </div>
          <div className='register-button' onClick={() => this.login()}>Login</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);