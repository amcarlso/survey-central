import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Surveys from './Components/Surveys/Surveys';
import About from './Components/About/About';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/surveys' component={Surveys}/>
    <Route path='/about' component={About}/>
  </Switch>
)