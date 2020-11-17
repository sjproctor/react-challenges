import React, { Component } from 'react'
import Dice from './components/Dice'
import Log from './components/Log'
import RestartButton from './components/RestartButton'
// imports for the dice images (I stored the images in a folder called assets for organization)
import dice from './assets/dice.png'
import dice1 from './assets/dice-1.png'
import dice2 from './assets/dice-2.png'
import dice3 from './assets/dice-3.png'
import dice4 from './assets/dice-4.png'
import dice5 from './assets/dice-5.png'
import dice6 from './assets/dice-6.png'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      // puts all the dice images in an array
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      // assigns a neutral image for the starting picture
      currentPic: dice,
      // empty array that will hold the logged rolls
      diceLog: []
    }
  }

  handleDiceRoll = () => {
    // destructure values out of state
    let { rollImages, diceLog } = this.state
    // creates a random number the length of the rollImages array
    let diceRoll = Math.ceil(Math.random()*rollImages.length)
    // variable holding the current image from the array
    let newRoll = rollImages[diceRoll]
    // setting state with the current image and logging the current roll
    this.setState({ currentPic: newRoll, diceLog: [...diceLog, diceRoll+1] })
  }

  handleRestartClick = () => {
    // method that sets the original state to restart the game
    // this method is passed as props to the RestartButton component
    this.setState({
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    })
  }

  render(){
    // destructuring the values out of state
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
      {/* calls all the components that will be rendered on the Board and passes appropriate information and methods as props to the child components */}
        <Dice
          handleDiceRoll={ this.handleDiceRoll }
          currentPic={ currentPic }
        />
        <RestartButton
        restartGame={ this.handleRestartClick }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default App
