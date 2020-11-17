import React, { Component } from 'react';

class Dice extends Component{
  render(){
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        {/* image tag that will render the current dice picture and allows the user to click on the dice */}
        {/* the onClick method calls this.handleDiceRoll in App.js */}
        <img
          id="dice-img"
          alt="images of dice"
          src={ this.props.currentPic }
          onClick={ this.props.handleDiceRoll }
        />
      </div>
    )
  }
}

export default Dice
