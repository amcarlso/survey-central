import React, { Component } from 'react';
import './NewSurvey.scss';
// import Swal from 'sweetalert2';
import axios from 'axios';

export default class NewSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyName: '',
      surveyNameChosen: false,
      questionNameInput: '',
      questionNameChosen: false,
      optionInput: '',
      options: [],
      questionName: ''
    }
  }

  handleInput = (prop, e) => {   // updates input for surveyName, questionName, optionInput
    this.setState({[prop]: e.target.value})   
  }

  handleSave = (prop) => { // locks the input into place in state
    this.setState({[prop]: !this.state[prop]});
  }

  handleClearOptionInput = () => {
    this.setState({
      optionInput: ''
    })
  }

  handleAddQName = () => { // updates the questionName on state with questionNameInput
    const {  questionNameInput } = this.state;
    this.setState({
      questionName: questionNameInput
    });
  }

  handleAddOption = () => {   // updates the options array on state with optionInput
    const { optionInput, options } = this.state;
    console.log(options);
    this.setState({
      options: [...options, optionInput]
    })
    this.handleClearOptionInput();  // clears out the option input to allow user to enter another option in the question.
  }

  handleSaveQuestion = async () => {
    const { surveyName, questionName, options} = this.state;
    const res = await axios.post('/api/questions', {survey: surveyName, question: questionName, options: options});
    if (res.data === 'I think it worked') {
      this.setState({
        questionName: '',
        options: []
      })
    }
    console.log(res.data);
  }
  render() {
    const { surveyName, surveyNameChosen, questionNameChosen, optionInput, questionNameInput } = this.state;

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
              <button 
                disabled={surveyName === ''}
                onClick={() => this.handleSave('surveyNameChosen')} 
                className='button'>{!surveyNameChosen ? 'Save' : 'Saved'}
              </button>
          </div>
          <div>
              <span>Question:</span>
              <input 
                disabled={!surveyNameChosen}
                value={questionNameInput} 
                type='text' 
                onChange={(e) => this.handleInput('questionNameInput', e)}
              />
              <button 
                disabled={questionNameInput === '' || !surveyNameChosen}
                onClick={() =>  {
                  this.handleAddQName();
                  this.handleSave('questionNameChosen');
                }} 
                className='button'>{!questionNameChosen ? 'Save' : 'Saved'}
              </button>
          </div>
          <div>
              <span>Option:</span>
              <input 
                disabled={!questionNameChosen}
                value={optionInput}
                type='text' 
                onChange={(e) => this.handleInput('optionInput', e)}
              />
              <button onClick={() => this.handleAddOption()} className='button'>Save</button>
          </div>
          <div>
            <div onClick={() => this.handleSaveQuestion()} className='button'>Next Question</div>
            <div className='button'>Save Survey</div>
          </div>
        </div>


      </div>
    )
  }
}