import React, {Component} from 'react';
import './modals.scss';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
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
        text: 'You must fill out all fields!',
        timer: 1500
      })
    }
    if (!password.includes('@') || !password.includes('.')) {
      return Swal.fire({
        type: 'error',
        title: 'Please Enter a Valid Email Address',
        timer: 1500,
        showConfirmButton: false
      })
    }
    let res = await axios.post('/auth/register', {name, email, password});
    if (res.data.message) {
      return console.log(res.data.message);
    } else if (res.data.user) {
      await this.props.updateUser(res.data.user);
      this.setState({name: '', email: '', password: ''});
      this.props.history.push('/dashboard');
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      this.register();
    } else if (evt.keyCode === 27) {
      this.setState({
        name: '',
        email: '',
        password: ''
      })
      this.props.handleRegisterModal();
    }
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className='modal'>
        <div className='input-container'>
          <div className='cancel-menu' onClick={() => this.props.handleRegisterModal()}>X</div>
          <div className='each-input'>
            <p>Name: </p>
            <input  
              id='register-input'
              value={name}
              type='text' 
              onKeyDown={(e) => this.handleKeyDown(e)}
              onChange={(e) => this.handleInput('name', e)}
            />
          </div>
          <div className='each-input'>
            <p>Email: </p>
            <input  
              value={email}
              type='text' 
              onKeyDown={(e) => this.handleKeyDown(e)}
              onChange={(e) => this.handleInput('email', e)}
            />
          </div>
          <div className='each-input'>
            <p>Password: </p>
            <input  
              type='password' 
              value={password}
              onKeyDown={(e) => this.handleKeyDown(e)}
              onChange={(e) => this.handleInput('password', e)}
            />
          </div>
          <div className='conf-button' onClick={() => this.register()}>Register</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return { store };
};

export default connect(mapStateToProps, {updateUser})(withRouter(Register));