import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null
    }
  }

  componentDidMount(){
    const { squares } = this.state
    let treasure = Math.floor(Math.random()*squares.length)
    let bomb = Math.floor(Math.random()*squares.length)
    this.setState({ treasureLocation: treasure, bombLocation: bomb})
  }

  handleLocations = (index) => {
    alert(index)
  }

  render(){
    let square = this.state.squares.map((value, index) => {
      return(
        <Square
          key={ index }
          index={ index }
          value={ value }
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

export default App
