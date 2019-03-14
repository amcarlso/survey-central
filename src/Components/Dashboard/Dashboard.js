import React from 'react';
import './Dashboard.scss';
import axios from 'axios';
import { connect } from 'react-redux';
import { logoutUser } from '../../ducks/reducer';


function Dashboard(props) {
  const logout = async () => {
    await axios.post('/auth/logout');
    props.history.push('/');
    props.logoutUser();

  }

  return (
    <div className='dashboard'>
      <header>Dashboard</header>
      <div className='logout-button' onClick={() => logout()}>Logout</div>
    </div>
  )
}

const mapStateToProps = store => {
  return { store };
};

export default connect(mapStateToProps, { logoutUser })(Dashboard);