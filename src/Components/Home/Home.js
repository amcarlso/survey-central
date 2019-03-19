import React, {Component} from 'react';
import './Home.scss';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import survey from '../Home/survey.png';
import survey2 from '../Home/survey2.png';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: false,
      register: false,
      menuShow: false
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

  render() {
    const { menuShow, login, register } = this.state;
    return (
      <div className="home">
        <div className={menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
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
          <div onClick={() => this.props.history.push('/surveys')} className='menu-options'>Surveys</div>
          <div onClick={() => this.props.history.push('/about')} className='menu-options'>About Survey Central</div>
        </div>
        <div 
          className={menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
          onClick={() => this.handleMenuToggle()}
        >
          Menu
        </div>
        <header>Welcome to Survey Central</header>
        <div className='body-containers'>
          <div>
            <img src={survey} alt='survey'/>
            <span onClick={() => this.props.history.push('/surveys')}>Take Surveys</span>
          </div>
          <div>
          <img src={survey2} alt='survey'/>
            <span onClick={() => this.handleRegisterModal()}>Make Surveys</span>
          </div>
        </div>
        <div className={login ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Login handleInput={this.handleInput} handleRegisterModal={this.handleRegisterModal} handleLoginModal={this.handleLoginModal}/>
        </div>
        <div className={register ? 'modal-parent modal-show' : 'modal-parent modal-hide'}>
          <Register handleInput={this.handleInput} handleRegisterModal={this.handleRegisterModal} handleLoginModal={this.handleLoginModal}/>
        </div>
      </div>
    )
  }
}