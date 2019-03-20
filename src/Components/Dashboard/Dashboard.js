import React, { Component } from 'react';
import './Dashboard.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';
import Swal from 'sweetalert2';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount = () => {
    // if (!this.props.store.user.name) {  //if not logged in, push user to home page
    //   Swal.fire({
    //     type: 'error',
    //     title: 'You must login to see this page',
    //     showConfirmButton: false,
    //     timer: 1500
    //   })
    //   this.props.history.push('/');
    // }
  }

  logout = async () => {
    await axios.post('/auth/logout');
    this.props.history.push('/');
    this.props.logoutUser();   // Resets info stored in the Redux Store to empty
  }

  render() {
    return (
      <div className='dashboard'>
        <header className='header'>Dashboard</header>
        <div className='menu-container'>
          <span>Welcome, {this.props.store.user.name}</span>
          <div className='logout-button' onClick={() => this.logout()}>Logout</div>
        </div>
        <div onClick={() => this.props.history.push('/new')}>New Survey</div>
      </div>
    )
  }
}
 
const mapStateToProps = store => {
  return { store };
};

export default connect(mapStateToProps, { logoutUser })(Dashboard);