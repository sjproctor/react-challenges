import React, { Component } from 'react';

class Dice extends Component{
  render(){
    // destructuring the values out of props
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          alt="images of dice"
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
