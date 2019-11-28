import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      answerArray: ["Holy Smokes!", "No way, Jose", "Sure, why not?", "Yeah, Imma say no", "Seriously?", "Yaaaas girl", "If you say so", "Hmmm...", "Atta kid", "Not a chance", "Oh please", "Wanna try that again?", "Yes! A thousand times yes!"],
      answer: null,
      question: "",
      isShaking: false
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // creates a random number
    let randomNumber = Math.floor(Math.random() * answerArray.length)
    return answerArray[randomNumber]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({question: e.target.value})
  }

  handleSubmit = () => {
    // destructures question out of state
    const { question } = this.state
    // checks to see if there is a question in the input
    if(question.length > 0 && question.includes("?")){
      // calls the getAnswer function and saves the outcome as answer
      const answer = this.getAnswer()
      // sets state as the outcome to the getAnswer function in all uppercase for Magic8 Ball styling
      this.setState({isShaking: true})
      setTimeout(() => {
        this.setState({answer: answer.toUpperCase()})
      }, 1500)
    }
  }

  restartClick = () => {
    // need "value={this.state.question}" in the form to clear the form when resetting state
    this.setState({
      answer: null,
      question: "",
      isShaking: false
    })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          value={this.state.question}
          onChange={this.handleChange}
        />
        <button
          onClick={this.restartClick}
        >
        Clear
        </button>
        <br />
        <button
          id="submitButton"
          onClick={this.handleSubmit}
        >
          Ask the Magic 8 Ball a Question
        </button>
        <div
          id="eightBall"
          className={`${this.state.isShaking === false ? "" : "shaking"}`}
        >
          <div id="eight">8</div>

          {this.state.answer &&
            <p id="answer"> {this.state.answer} </p>
          }

        </div>
      </div>
    )
  }
}

export default App;
