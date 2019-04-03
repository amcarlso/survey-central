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
    }
  }

  

  



  render() {
    console.log(this.props);
    const { menuShow, login, register } = this.state;
    return (
      <div className="home">

        <Menu/>
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
      </div>
    )
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(Home)