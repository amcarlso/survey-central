import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import './Menu.scss';

function Menu(props) {
  console.log(props)
  return (
    <div>
      <div className={props.menuShow ? 'menu menu-show' : 'menu menu-hide'}>
        <div className='cancel-menu' onClick={() => props.handleMenuToggle()}>X</div>
        {!props.user.name ? (
          <div>
            <div 
              className='menu-options'
              onClick={() => {
                props.handleLoginModal();
                props.handleMenuToggle();
              }
            }
            >
              Login
            </div>
            <div 
              className='menu-options'
              onClick={() => {
                props.handleRegisterModal();
                props.handleMenuToggle();
              }
            }
            >
              Register
            </div>
          </div>
          ) : (
            <div>
              <div onClick={() => props.logoutUser()}>
                Logout
              </div>
            </div>
          )
        }
        <div onClick={() => props.history.push('/surveys')} className='menu-options'>Surveys</div>
        <div onClick={() => props.history.push('/about')} className='menu-options'>About Survey Central</div>
      </div>
      <div 
        className={props.menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
        onClick={() => props.handleMenuToggle()}
      >
        Menu
      </div>
    </div>
  )
}

const mapStateToProps = store => store;

export default connect(mapStateToProps, { logoutUser })(withRouter(Menu));