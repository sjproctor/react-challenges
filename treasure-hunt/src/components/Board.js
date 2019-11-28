import React, { Component } from 'react';
import Square, from './component/Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      square: Array(9).fill(null),
      winner: null

    }
  }

  restartGame = () => {
    this.setState({
      square: Array(9).fill(null)
    })
  }

  render(){
    return(
      <div>
        <h1>
          Treasure Hunt!
        </h1>
        <button onClick={ this.restartGame }>
          Restart Game
        </button>
      </div>
    )
  }
}

export default Board
