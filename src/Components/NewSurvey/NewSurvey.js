import React, { Component } from 'react';
import './NewSurvey.scss';

export default class NewSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyName: '',
      surveyNameChosen: false,
      questionName: '',
      questionNameChosen: false,
      option: '',
      questions: {},
      questionNumber: 1
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleLock = () => {
    this.setState({questionNameChosen: !this.state.questionNameChosen})
    this.setState({questionName: ''})
  }

  handleSave = (prop) => {
    this.setState({[prop]: !this.state[prop]});
  }

  handleAddQName = () => {
    const { surveyName, surveyNameChosen, questionName, questionNameChosen, option, questions, questionNumber } = this.state;
    questions[questionNumber] = {name: questionName};
    this.setState({questionNumber: this.state.questionNumber + 1});
    console.log(questions)
    console.log(this.state.questionNumber)
  }

  render() {
    const { surveyName, surveyNameChosen, questionName, questionNameChosen, option } = this.state;
    console.log(this.state)
    return (
      <div className='new-survey-page'>
        New Survey
        <div className='survey-input-container'>
          <div>
              <span>Survey Name:</span>
              <input 
                type='text'
                value={surveyName} 
                onChange={(e) => this.handleInput('surveyName', e)}
              />
              <span 
                onClick={() => this.handleSave('surveyNameChosen')} 
                className='save-button'>{!surveyNameChosen ? 'Save' : 'Saved'}
              </span>
          </div>
          <div>
              <span>Question:</span>
              <input 
                disabled={!surveyNameChosen}
                value={questionName} 
                type='text' 
                onChange={(e) => this.handleInput('questionName', e)}
              />
              <span 
                onClick={() =>  {
                  this.handleAddQName();
                  this.handleLock();
                }} 
                className='save-button'>{questionNameChosen ? 'Locked' : 'Unlocked'}
              </span>
          </div>
          <div>
              <span>Option:</span>
              <input 
                disabled={!questionNameChosen}
                value={option}
                type='text' 
                onChange={(e) => this.handleInput('option', e)}
              />
              <span className='save-button'>Save</span>
          </div>
        </div>
        
      </div>
    )
  }
}