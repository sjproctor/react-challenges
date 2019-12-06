import React, { Component } from 'react';
import Square from './Square'

class Board extends Component{
  constructor(){
    super()
    this.state = {
      // the spaces array represents the 9 squares on the board
      spaces: Array(9).fill("?"),
      // treasureLocation and bombLocation begin at null
      treasureLocation: null,
      bombLocation: null,
      // gameOver is initially set to false and will update to true when the game is over
      gameOver: false,
      // game outcome is null and will update with a winner or loser
      gameOutcome: null
    }
  }
  componentDidMount = () => {
    // componentDidMount is a react life cycle method that is called on creation of the component
    // destructure spaces out of state
    const { spaces } = this.state
    // setting random numbers for treasure and bomb location
    let treasure = Math.floor(Math.random()*spaces.length)
    let bomb = Math.floor(Math.random()*spaces.length)
    // if the treasure and bomb location are the same, reassign the bomb
    if(treasure === bomb){
      bomb = Math.floor(Math.random()*spaces.length)
    }
    console.log(treasure, bomb)
    // update state to assign the treasure and bomb a random number
    this.setState({ treasureLocation: treasure, bombLocation: bomb})
  }

  restartGame = () => {
    // setting state to the initial values onClick to reset the game board
    this.setState({
      spaces: Array(9).fill("?"),
      treasureLocation: null,
      bombLocation: null,
      gameOver: false,
      gameOutcome: null
    })
    // calling componentDidMount to give new values to the bomb and treasure locations
    this.componentDidMount()
  }

  handleIconLocations = (index) => {
    // destructuring values out of state
    const { spaces, treasureLocation, bombLocation, gameOver } = this.state
    // evaluations for the index and treasure/bomb locations
    // each evaluation can only be true if the gameOver value is false, after the user finds the tresure or the bomb gameOver is updated to true
    if(treasureLocation === index && gameOver === false){
      // if the treasure it at the clicked index, update the array with the icon replacing the ? with a treasure emoji
      spaces[index] = "💍"
      // set state with the icon in the array
      this.setState({
        spaces: spaces,
      })
      // set a delay on ending the game and displaying the winning message so the user can see the emoji
      setTimeout(() => {
        this.setState({ gameOver: true, gameOutcome: "You win! 😃" })
      }, 500)
    // each evaluation can only be true if the gameOver value is false, after the user finds the tresure or the bomb gameOver is updated to true
    } else if( bombLocation === index && gameOver === false){
      // if the bomb it at the clicked index, update the array with the icon replacing the ?
      spaces[index] = "💣"
      // set state with the icon in the array
      this.setState({
        spaces: spaces,
      })
      // set a delay on ending the game and displaying the losing message so the user can see the emoji
      setTimeout(() => {
        this.setState({ gameOver: true, gameOutcome: "You lose ☹️" })
      }, 500)
    // if the square clicked is anything but the treasure or bomb it will become a tree as long as the gameOver is still false
    } else if (gameOver === false){
      spaces[index] = "🌴"
      this.setState({ spaces: spaces})
    }
  }

  render(){
    // destructuring
    let { spaces } = this.state
    // mapping over the spaces array from the state object and assigning that mapped functionality to a variable
    let square = spaces.map((value, index) => {
      // returning the component call as the new value for each index in the spaces array - in JSX the return value must be wrapped in ()
      // passing values and the handleIconLocations method as props to the square component
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          handleIconLocations={ this.handleIconLocations }
        />
      )
    })
    return(
      <div>
        <h1>Treasure Hunt Challenge!</h1>
        {/* rendering the variable name that contains the mapped component calls - the component calls are part of an array so even though the <Square /> operate indepenently of each other they are part of an array so they have a defined index */}
        {/* the mapped squares and the game board will only render as long as the game is gameOver is still false */}
        { !this.state.gameOver &&
          <div id="gameBoard">
          { square }
          </div>
        }
        {/* gameOutcome will only render when gameOver is true */}
        { this.state.gameOver &&
          <div id="outcomeBoard">
            { this.state.gameOutcome }
          </div>
        }
        {/* button that will restart the game by resetting the initial state */}
        <button onClick={ this.restartGame }>
          Restart Game
        </button>
      </div>
    )
  }
}

export default Board
