import React, { Component } from 'react';
import './App.scss';
import Constructor from './Constructor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: null,
      hair: '',
      weight: null,
      birthday: '',
      menuShow: false
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleMenuToggle = () => {
    this.setState({menuShow: !this.state.menuShow})
  }
  
  render() {
    console.log(this.state);
    const { name, age, hair, weight, birthday, menuShow } = this.state;
    const personObj = {
      name, age, hair, weight, birthday
    }
    return (
      <div className="app">
        <div className={menuShow ? 'menu menu-show' : 'menu menu-hide'}>
          <div className='cancel-menu' onClick={() => this.handleMenuToggle()}>X</div>
          <div>Login</div>
          <div>Register</div>
        </div>
        <div 
          className={menuShow ? 'menu-button menu-button-hide' : 'menu-button menu-button-show'}
          onClick={() => this.handleMenuToggle()}
        >
          Menu
        </div>
        <div className='input-container'>
          <div className='each-input'>
            <p>Name: </p>
            <input  type='text' onChange={(e) => this.handleInput('name', e)}/>
          </div>
          <div className='each-input'>
            <p>Age: </p>
            <input  type='number' onChange={(e) => this.handleInput('age', e)}/>
          </div>
          <div className='each-input'>
            <p>Hair: </p>
            <input  type='text' onChange={(e) => this.handleInput('hair', e)}/>
          </div>
          <div className='each-input'>
            <p>Weight: </p>
            <input  type='number' onChange={(e) => this.handleInput('weight', e)}/>
          </div>
          <div className='each-input'>
            <p>Birthday: </p>
            <input  type='text' onChange={(e) => this.handleInput('birthday', e)}/>
          </div>
        </div>
        <Constructor personObj={personObj}/>
      </div>
    );
  }
}

export default App;
