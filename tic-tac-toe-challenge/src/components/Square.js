import React, { Component } from 'react'

class Square extends Component{

  handleSquareClick = () => {
    // calling the gamePlay method from the parent component and passing the index of the square that was clicked
    this.props.gamePlay(this.props.index)
    // ^^ calls the method gamePlay in Board and passes this.props.index that will replace the argument called index
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        { this.props.value }
      </div>
    )
  }
}

export default Square
