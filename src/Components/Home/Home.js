import React, {Component} from 'react';
import './Home.scss';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Menu from '../Menu/Menu';
import survey from '../Home/survey.png';
import survey2 from '../Home/survey2.png';
import { connect } from 'react-redux';



class Home extends Component {

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
    console.log(this.props);
    const { menuShow, login, register } = this.state;
    return (
      <div className="home">

        <Menu 
          menuShow={menuShow} 
          handleMenuToggle={this.handleMenuToggle}
          handleLoginModal={this.handleLoginModal}
          handleRegisterModal={this.handleRegisterModal}
        />
        <header>Welcome to Survey Central</header>
        <div className='body-containers'>
          <div>
            <img src={survey} alt='survey'/>
            <span onClick={() => this.props.history.push('/surveys')}>Take Surveys</span>
          </div>
          <div>
          <img src={survey2} alt='survey'/>
            <span onClick={() => this.handleLoginModal()}>Make Surveys</span>
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

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Home)