import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Surveys from './Components/Surveys/Surveys';
import About from './Components/About/About';
import NewSurvey from './Components/NewSurvey/NewSurvey';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/surveys' component={Surveys}/>
    <Route path='/about' component={About}/>
    <Route path='/new' component={NewSurvey}/>
  </Switch>
)