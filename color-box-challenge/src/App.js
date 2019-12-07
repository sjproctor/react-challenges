import React, { Component } from 'react'
// importing the ColorBox component
import ColorBox from './components/ColorBox'
import './App.css'

class App extends Component{
  constructor(){
    super()
    // App.js holds state only for the super stretch challenge of adding and removing boxes, App.js is not involved with any ColorBox logic
    this.state = {
      colorBoxArray: []
    }
  }

  addColorBox = () => {
    // destructures colorBoxArray out of state
    let { colorBoxArray } = this.state
    // pushes a ColorBox component call into the array in state
    colorBoxArray.push(<ColorBox />)
    // updates state with the new array
    this.setState({ colorBoxArray: colorBoxArray })
  }

  removeColorBox = () => {
    // destructures colorBoxArray out of state
    let { colorBoxArray } = this.state
    // removes a ColorBox component call from the array in state
    colorBoxArray.pop()
    // updates state with the new array
    this.setState({ colorBoxArray: colorBoxArray })
  }

  render(){
    // destructures colorBoxArray out of state
    let { colorBoxArray } = this.state
    return(
      <div>
        <h1>Color Box Challenge</h1>
        <br />
          <main>
            {/* button that calls the addColorBox onClick */}
            <button onClick={ this.addColorBox }>Add a Color Box</button>
            {/* button that calls the removeColorBox onClick */}
            <button onClick={ this.removeColorBox }>Remove a Color Box</button>
            <div id="box-holder">
              {/* renders the content of the colorBoxArray */}
              { colorBoxArray }
            </div>
          </main>
      </div>
    )
  }
}

export default App
