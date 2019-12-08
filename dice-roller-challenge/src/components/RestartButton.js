import React, { Component } from 'react'

class RestartButton extends Component{

  handleRestart = () => {
    // <restartGame={ this.handleRestartClick }> is passed as this.props.restartGame
    // handleRestart is called onClick which calls restartGame() in the Board component
    this.props.restartGame()
  }

  render(){
    return(
      <div>
        {/* Creates an button to call a method that resets the original state */}
        <button onClick={ this.handleRestart }>Restart</button>
      </div>
    )
  }
}

export default RestartButton
