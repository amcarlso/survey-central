import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuShow: false
    }
  }

  handleMenuToggle = () => {
    this.setState({menuShow: !this.state.menuShow})
  }

  render() {
    return (
      <div>
        <div className={this.state.menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
          {!this.props.user.name ? (
            <div>
              <div 
                className='menu-options'
                onClick={() => {
                  this.props.handleLoginModal();
                  this.handleMenuToggle();
                }
              }
              >
                Login
              </div>
              <div 
                className='menu-options'
                onClick={() => {
                  this.props.handleRegisterModal();
                  this.handleMenuToggle();
                }
              }
              >
                Register
              </div>
            </div>
            ) : (
              <div>
                <div onClick={() => this.props.logoutUser()}>
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