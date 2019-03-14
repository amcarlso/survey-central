import React from 'react';
import './Dashboard.scss';
import axios from 'axios';

export default function Dashboard(props) {
  const logout = async () => {
    await axios.get('/auth/logout');
  }

  return (
    <div className='dashboard'>
      <header>Dashboard</header>
      <div className='logout-button' onClick={() => logout()}>Logout</div>
    </div>
  )
}