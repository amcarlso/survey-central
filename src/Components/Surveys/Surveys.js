import React, { Component } from 'react';
import './Surveys.scss'
import axios from 'axios';
import Home from '../Home/Home';
import Menu from '../Menu/Menu';

export default class Surveys extends Component {
  constructor(props) {
    super(props);
      this.state = {
        surveys: []
      }
  }

  componentDidMount = () => {
    this.handleGetSurveys();
  }

  handleGetSurveys = async () => {
    const res = await axios.get('/api/surveys')
    this.setState({
      surveys: res.data.surveys
    })
  }

  render() {
    const { surveys } = this.state;
    const surveyList = surveys.map( survey => {
      return (
        <div className='survey-box' key={survey.survey_id}>
          <div>{survey.name}</div>
          <div>Times Taken: {survey.times_taken}</div>
          <div>Take Survey</div>
        </div>
      )
    })
    return (
      <div className='surveys-page'>
        <div className='surveys-container'>
          <header>Surveys</header>
          <Menu />
            {surveyList}
        </div>
      </div>
    )
  }
}