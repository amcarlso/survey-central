import React, {Component} from 'react';
import './Home.scss';
import Register from '../Register/Register';
import Login from '../Login/Login';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      register: false,
      menuShow: false
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleMenuToggle = () => {
    this.setState({menuShow: !this.state.menuShow})
  }

  render() {
    const { menuShow } = this.state;
    return (
      <div className="home">
        <div className={menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
          <div>Login</div>
          <div>Register</div>
        </div>
        <div 
          className={menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
          onClick={() => this.handleMenuToggle()}
        >
          Menu
        </div>
        <div className='register-parent'>
          <Login />
        </div>
        <div className='login-parent'>
          <Register />
        </div>
      </div>
    )
  }
}