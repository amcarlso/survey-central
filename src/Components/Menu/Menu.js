import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false,
      login: false,
      register: false
    }
  }

  handleMenuToggle = () => {
    this.setState({menuShow: !this.state.menuShow})
  }

  handleLoginModal = () => {
    this.setState({
      login: !this.state.login,
      register: false
    })
    document.getElementById('login-input').focus();
  }

  handleRegisterModal = () => {
    this.setState({
      register: !this.state.register,
      login: false
    })
    document.getElementById('register-input').focus();
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  }
  
  render() {
    const { login, register } = this.state;
    return (
      <div>
        <div className={login ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Login handleInput={this.handleInput} handleRegisterModal={this.handleRegisterModal} handleLoginModal={this.handleLoginModal}/>
        </div>
        <div className={register ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Register handleInput={this.handleInput} handleRegisterModal={this.handleRegisterModal} handleLoginModal={this.handleLoginModal}/>
        </div>
        <div className={this.state.menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
          {!this.props.user.name ? (
            <div>
              <div 
                className='menu-options'
                onClick={() => {
                  this.handleLoginModal();
                  this.handleMenuToggle();
                }
              }
              >
                Login
              </div>
              <div 
                className='menu-options'
                onClick={() => {
                  this.handleRegisterModal();
                  this.handleMenuToggle();
                }
              }
              >
                Register
              </div>
            </div>
            ) : (
              <div>
                <div className='menu-options' onClick={() => this.handleLogout()}>
                  Logout
                </div>
              </div>
            )
          }
          <div onClick={() => this.props.history.push('/surveys')} className='menu-options'>Surveys</div>
          <div onClick={() => this.props.history.push('/about')} className='menu-options'>About Survey Central</div>
        </div>
        <div 
          className={this.state.menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
          onClick={() => this.handleMenuToggle()}
        >
          Menu
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { logoutUser })(withRouter(Menu));