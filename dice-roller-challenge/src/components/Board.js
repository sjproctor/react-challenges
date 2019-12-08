import React, { Component } from 'react'
// imports the components that will be rendered on the Board (I stored the components in a folder called components for organization)
import Dice from './Dice'
import Log from './Log'
import RestartButton from './RestartButton'
// imports for the dice images (I stored the images in a folder called images for organization)
import dice from '../images/dice.png'
import dice1 from '../images/dice-1.png'
import dice2 from '../images/dice-2.png'
import dice3 from '../images/dice-3.png'
import dice4 from '../images/dice-4.png'
import dice5 from '../images/dice-5.png'
import dice6 from '../images/dice-6.png'

class Board extends Component{
  // Board is a smart component that will hold state, in this project Board is the only smart component
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

  handleRollClick = () => {
    // destructure values out of state
    let { rollImages, diceLog } = this.state
    // creates a random number the length of the rollImages array
    let randomNum = Math.floor(Math.random()*rollImages.length)
    // variable holding the current image from the array
    let newRoll = rollImages[randomNum]
    // pushes the current roll to the diceLog array - must add one to the value to account for the array being zero indexed (dice1 is at array index 0)
    diceLog.push(randomNum+1)
    // setting state with the current image and logging the current roll
    this.setState({ currentPic: newRoll, diceLog: diceLog })
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
          roll={ this.handleRollClick }
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

export default Board
