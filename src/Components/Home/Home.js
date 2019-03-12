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

  handleLoginModal = () => {
    this.setState({
      login: !this.state.login,
      register: false
    })
  }

  handleRegisterModal = () => {
    this.setState({
      register: !this.state.register,
      login: false
    })
  }

  render() {
    const { menuShow, login, register } = this.state;
    return (
      <div className="home">
        <div className={menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
          <div onClick={() => this.handleLoginModal()}>Login</div>
          <div onClick={() => this.handleRegisterModal()}>Register</div>
        </div>
        <div 
          className={menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
          onClick={() => this.handleMenuToggle()}
        >
          Menu
        </div>
        <div className={login ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Login />
        </div>
        <div className={register ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Register />
        </div>
      </div>
    )
  }
}