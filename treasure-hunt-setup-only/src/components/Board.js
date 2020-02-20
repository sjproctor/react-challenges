import React, { Component } from 'react'
import Square from './Square'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      spaces: ["?", "?", "?", "?", "?", "?", "?", "?", "?"],
      treasureLocation: null,
      bombLocation: null
    }
  }

  componentDidMount = () => {
    let treasure = Math.floor(Math.random()*this.state.spaces.length)
    let bomb = Math.floor(Math.random()*this.state.spaces.length)
    this.setState({ treasureLocation: treasure, bombLocation: bomb})
  }

  handleLocations = (index) => {
    alert(index)
  }

  render(){
    let square = this.state.spaces.map((value, index) => {
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

export default Board
