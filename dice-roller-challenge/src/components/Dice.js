import React, { Component } from 'react';

class Dice extends Component{
  render(){
    // <roll={ this.handleRollClick }> is passed to this component as this.props.roll
    // destructuring the values out of props
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        {/* image tag that will render the current dice picture and allows the user to click on the dice */}
        {/* the onClick method calls this.handleRollClick in the Board component */}
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
