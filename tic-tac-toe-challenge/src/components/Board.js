import React, { Component } from 'react'
import Square from "./Square"

class Board extends Component{
  constructor(){
    super()
    this.state = {
      // dynamically populating the array with null
      gameBoard: Array(9).fill(null),
      // assigning a starting player
      currentPlayer: "🦄",
      // creating a winner that will end the game
      winner: null,
    }
  }

  gamePlay = (index) => {
    // ^^ method that handles the game logic, takes index as an argument
    // destructuring values out of state
    const { gameBoard, currentPlayer, winner, clickCount } = this.state
    // if the index of the clicked square is equal to null the square can be updated, prevents squares from being reassigned
    if(gameBoard[index] === null && winner === null){
      // assigns the index to current player X or O which is assigned by the terinary operator in the setState method
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
        // add one to the clickCount
        clickCount: clickCount+1
      })
    }
    // fixes a bug that changed the winner after the game ended, now the winning method is only called if the winner is null
    if(winner === null){
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    // creating an array of all the possible wins by index
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    // mapping over the array, each value from the map will be an array of a index trio
    winningConditions.map(value => {
      // destructures variables out of the array
      const [a, b, c] = value
      //if there is an initial value, compare the value to b and c
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  restartGame = () => {
    // setting state back to the original values
    this.setState({
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    })
  }

  render(){
    // destructing values out of state
    const { gameBoard, currentPlayer, winner } = this.state
    // mapping over the gameBoard array in state and returning the square component call for every index
    // passing props to square from the map function and also from the gamePlay method
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>
        {/* rendering the current player value from state only if the winner is still null, the winner div will replace the current player div */}
        { !this.state.winner &&
          <div className="statusDiv">
            The Current Player is: { currentPlayer }
          </div>
        }
        {/* rendering the winner value from state only if the winner is not null, the winner div will take the place of the current player div */}
        { this.state.winner &&
          <div className="statusDiv">
            The Winner is: { winner }
          </div>
        }
        {/* rendering the array of Square component calls */}
        <div id="outcomeBoard">
          { mappedGameBoard }
        </div>
        {/* restart button calling the restartGame */}
        <button onClick={ this.restartGame }>Restart Game</button>
      </div>
    )
  }
}

export default Board
