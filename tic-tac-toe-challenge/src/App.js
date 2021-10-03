import React, { Component } from 'react'
import Square from './components/Square'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      currentPlayer: "❌",
      winner: null
    }
  }
  playerSelection = (currentClick) => {
    const { squares, currentPlayer, winner } = this.state
    if(squares[currentClick] === null && !winner){
      squares[currentClick] = currentPlayer
      this.setState({
        squares: squares,
        currentPlayer: currentPlayer === "❌" ? "⭕️" : "❌"
      })
    }
    this.winning()
  }
  winning = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.forEach(value => {
      const [first, second, third] = value
      const { squares } = this.state
      if(
        squares[first] === "❌" &&
        squares[second] === "❌" &&
        squares[third] === "❌"
      ){
        this.setState({winner: "❌"})
      } else if(
        squares[first] === "⭕️" &&
        squares[second] === "⭕️" &&
        squares[third] === "⭕️"
      ){
        this.setState({winner: "⭕️"})
      }
    })
  }
  restartGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      currentPlayer: "❌",
      winner: null
    })
  }
  render(){
    // google: if every item in an array is null
    const catsGame = this.state.squares.every(value => value !== null)
    return(
      <>
        <h1>Tic Tac Toe</h1>
        {this.state.winner && <h3>{this.state.winner} wins!</h3>}
        {(catsGame && !this.state.winner) && <h3>Cats Game</h3>}
        {(this.state.winner || catsGame)&&
          <div className="button">
            <button onClick={this.restartGame}>
              Play Again
            </button>
          </div>
        }
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return(
              <Square
                value={value}
                index={index}
                key={index}
                playerSelection={this.playerSelection}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default App
