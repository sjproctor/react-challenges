import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import robot from './robot.png'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      userInput: "",
    }
  }

  robot = (event) => {
    this.setState({ userInput: event.target.value})
  }


  render(){
    let { userInput } = this.state
    return(
      <div>
        <h1>Robot Challenge</h1>
        <img
          src={ robot }
          alt="robot clipart"
        />
        <form>
          <h3>Enter text here:</h3>
            <input
              onChange={ this.robot }
              value={ userInput }
            />
        </form>
        <br />
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
