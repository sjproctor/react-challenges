import React, { Component } from 'react'

class RestartButton extends Component{

  // <restartGame={ this.handleRestartClick }> is passed as this.props.restartGame
  render(){
    return(
      <div>
        {/* Creates an button to call a method that resets the original state */}
        <button onClick={ this.props.restartGame }>Restart</button>
      </div>
    )
  }
}

export default RestartButton
