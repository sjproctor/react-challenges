import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  handleLocations = (index) => {
    alert(index)
  }

  render(){
    let square = this.state.board.map((value, index) => {
      return(
        <Square
          index={ index }
          handleLocations={ this.handleLocations }
        />
      )
    })
    return(
      <div>
        <div id="board">
          { square }
        </div>
      </div>
    )
  }
}

export default Board
