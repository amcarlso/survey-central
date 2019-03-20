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
      questions: {}
    }
  }

  handleInput = (prop, e) => {
    this.setState({[prop]: e.target.value})
  }

  handleLock = () => this.setState({questionNameChosen: !this.state.questionNameChosen})
  handleUnlock = () => {
    this.setState({questionNameChosen: !this.state.questionNameChosen})
    this.setState({questionName: ''})
  }

  render() {
    const surveyItems = this.state.questions.map
    console.log(this.state)
    return (
      <div className='new-survey-page'>
        New Survey
        <div className='survey-input-container'>
          <div>
            <span>Survey Name:</span>
            <input type='text' placeholder='Survey Name' onChange={(e) => this.handleInput('surveyName', e)}/>
            <span className='save-button'>Save</span>
          </div>
          <div>
            <span>Question:</span>
            <input value={this.state.questionName} type='text' placeholder='Question' onChange={(e) => this.handleInput('questionName', e)}/>
            {this.state.questionNameChosen ? 
              <span onClick={() => this.handleUnlock()} className='save-button'>Locked</span> : 
              <span onClick={() => this.handleLock()} className='save-button'>Unlocked</span>
            }
          </div>
          <div>
            <span>Option:</span>
            <input type='text' placeholder='Option' onChange={(e) => this.handleInput('option', e)}/>
            <span className='save-button'>Save</span>
          </div>
        </div>
        {surveyItems}
      </div>
    )
  }
}