import React, { Component } from 'react';
import './App.scss';
import routes from './routes';

class App extends Component {
  
  render() {
    console.log(this.state);
    return (
      <div>
        {routes}
      </div>
    );
  }
}

export default App;
