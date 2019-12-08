import React, { Component } from 'react'
// importing the child components
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
// importing the robot image
import robot from './robot.png'
import './App.css'

class App extends Component{
  constructor(){
    super()
    // creating a state object to hold the user input
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // sets the state as the value of the input field
    // e is short for DOM event (a standard abbreviation)
    this.setState({ userInput: e.target.value})
  }

  render(){
    // destructures userInput out of state
    let { userInput } = this.state
    return(
      <div>
        <h1>Robot Challenge</h1>
        {/* renders the robot image */}
        <img
          src={ robot }
          alt="robot clipart"
        />
        <h3>Enter text here:</h3>
        {/* user input field - every DOM event that happens in the input will call the robot method and update state */}
        <input
          onChange={ this.robot }
          value={ userInput }
        />
        <br />
        {/* calls all the components that will be rendered on the page and passes the userInput as props to the child components */}
        <div id="robot-outcome">
          <GoodRobot
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}

export default App
