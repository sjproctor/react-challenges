import React, { Component } from 'react'
import Dice from './Dice'
import Log from './Log'
import dice from '../images/Dice.png'
import dice1 from '../images/Dice-1.png'
import dice2 from '../images/Dice-2.png'
import dice3 from '../images/Dice-3.png'
import dice4 from '../images/Dice-4.png'
import dice5 from '../images/Dice-5.png'
import dice6 from '../images/Dice-6.png'

class Board extends Component{
  constructor(){
    super()
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleClick = () => {
    // destructure values out of state
    let { rollImages, diceLog } = this.state
    // random Number the length of the rollImages array
    let randomNum = Math.floor(Math.random()*rollImages.length)
    // variable holding the current image from the array
    let newRoll = rollImages[randomNum]
    // setting state with the current image
    diceLog.push(randomNum+1)
    this.setState({ currentPic: newRoll, diceLog: diceLog })
  }

  render(){
    // destructuring the values out of state
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        <Dice
          roll={ this.handleClick }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board
