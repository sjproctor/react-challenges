import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // the spaces array represents the 9 squares on the board
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      // can also be written as:
      // board: Array(9).fill("?"),
      treasureLocation: null,
      bombLocation: null,
      counter: 5,
      gameOver: false
    }
  }

  componentDidMount(){
    // componentDidMount is a react life cycle method that is called on creation of the component
    // call the method that assigns the values for bomb and treasure
    this.gameSet()
  }

  gameSet = () => {
    // setting random numbers for treasure and bomb location
    let treasure = Math.floor(Math.random() * this.state.board.length)
    let bomb = Math.floor(Math.random() * this.state.board.length)
    // if the treasure and bomb location are the same, reassign the bomb
    if(treasure === bomb){
      bomb = Math.floor(Math.random() * this.state.board.length)
    }
    this.setState({ treasureLocation: treasure, bombLocation: bomb })
  }

  restartGame = () => {
    // sets the initial state values
    this.setState({
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null,
      counter: 5,
      gameOver: false
    })
    // calls the method that sets the bomb and treasure values
    this.gameSet()
  }

  handleGamePlay = (index) => {
    // destructures values out of state
    const { board, treasureLocation, bombLocation, counter, gameOver } = this.state
    // decrements the counter for every click
    let count = counter - 1
    if(index === treasureLocation && !gameOver && counter > 0){
      board[index] = "💎"
      this.setState({ board: board, gameOver: "winner" })
    } else if(index === bombLocation && !gameOver && counter > 0){
      board[index] = "💣"
      this.setState({ board: board, gameOver: "lose" })
    } else if(!gameOver && counter > 0 && board[index] === "?"){
      board[index] = "🌴"
      this.setState({ board: board, counter: count })
    }
  }

  render() {
    // logging the treasure and bomb location during development
    console.log("treasure:", this.state.treasureLocation, "bomb:", this.state.bombLocation)
    return(
      <React.Fragment>
        <h1>Treasure Hunt</h1>
        <h3>Counter: { this.state.counter }</h3>
        <div id="gameBoard">
          { this.state.board.map((value, index) => {
            return (
              <Square
                value={ value }
                key={ index }
                index={ index }
                handleGamePlay={ this.handleGamePlay }
              />
            )
          }) }
        </div>
        { this.state.gameOver === "winner" &&
          <div className="endGameMessage">
            <h3>Congratulations! You found the treasure! 💎</h3>
            <button onClick={ this.restartGame }>Start Again</button>
          </div>
        }
        { (this.state.gameOver === "lose" || this.state.counter === 0)  &&
          <div className="endGameMessage">
            <h3>Welp, you lost! 🥺</h3>
            <button onClick={ this.restartGame }>Start Again</button>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App
