import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // array of possible magic8 ball answers
      answerArray: ["Holy Smokes!", "No way, Jose", "Sure, why not?", "Yeah, Imma say no", "Seriously?", "Yaaaas girl", "If you say so", "Hmmm...", "Atta kid", "Not a chance", "Oh please", "Wanna try that again?", "Yes! A thousand times yes!"],
      // initial answer
      answer: null,
      // added functionality to make sure the user adds text to the input form
      question: "",
      // added functionality to animate the 8ball
      isShaking: false
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // creates a random number
    let randomNumber = Math.floor(Math.random() * answerArray.length)
    // returns a random answer from the array
    return answerArray[randomNumber]
  }

  handleChange = (e) => {
    // gets the DOM event from the input onChange and updates state
    // updates the question key in state to whatever the user entered in the input
    this.setState({ question: e.target.value })
  }

  handleSubmit = () => {
    // destructures question out of state
    const { question } = this.state
    // checks to see if there is text and a question mark in the input, added functionality for UX fun
    if(question.length > 0 && question.includes("?")){
      // calls the getAnswer function and saves the outcome as answer
      const answer = this.getAnswer()
      // updates the state of shaking to be true to access animation
      this.setState({ isShaking: true })
      // sets state as the outcome to the getAnswer function in all uppercase for Magic8 Ball styling, added a timeout method to delay the answer being shown on the 8ball so the animation could be completed
      setTimeout(() => {
        this.setState({ answer: answer.toUpperCase() })
      }, 1500)
    }
  }

  handleRestart = () => {
    // need "value={ this.state.question }" in the input to clear the users text when resetting state
    // sets the original state onClick to restart the game
    this.setState({
      answer: null,
      question: "",
      isShaking: false
    })
  }

  render(){
    // everything inside the return needs to be wrapped in JSX tags
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        {/* input field that calls handleChange everytime there is a DOM event i.e. keystrokes */}
        <input
          id="inputBox"
          type="text"
          value={ this.state.question }
          onChange={ this.handleChange }
        />
        {/* restart button - sets the original state */}
        <button onClick={ this.handleRestart }>Clear</button>
        <br />
        {/* button that calls the Magic8 Ball functionality, because there are multiple attributes they are tabbed in and nested under the button tag */}
        <button
          id="submitButton"
          onClick={ this.handleSubmit }
        >
          Ask the Magic 8 Ball a Question
        </button>
        {/* div that has the id of the 8ball for styling and a className that is dynamically determined by the isShaking value in state so the animation is limited */}
        <div
          id="eightBall"
          className={`${ this.state.isShaking === false ? "" : "shaking" }`}
        >
          <div id="eight">8</div>
          {/* the magic8 ball only shows an answer after the button has been clicked, this code below sets up a conditional rendereing where both sides of the equation must be true for the answer to be rendered */}
          {/* Initally this.state.answer is null (a falsey value), and is updated with the handleSubmit method to a string (a truthy value) therefore the full evaluation is true and the answer is rendered on the browser */}
          { this.state.answer &&
            <p id="answer">{ this.state.answer }</p>
          }
        </div>
      </div>
    )
  }
}

export default App;
