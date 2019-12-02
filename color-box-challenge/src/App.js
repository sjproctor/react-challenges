import React, { Component } from 'react'
import ColorBox from './components/ColorBox'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      colorBoxArray: []
    }
  }

  addColorBox = () => {
    let { colorBoxArray } = this.state
    colorBoxArray.push(<ColorBox />)
    this.setState({ colorBoxArray: colorBoxArray })
  }

  removeColorBox = () => {
    let { colorBoxArray } = this.state
    colorBoxArray.pop()
    this.setState({ colorBoxArray: colorBoxArray })
  }

  render(){
    let { colorBoxArray } = this.state
    return(
      <div>
        <h1>Color Box Challenge</h1>
        <br />
          <main>
            <button onClick={ this.addColorBox }>Add a Color Box</button>
            <button onClick={ this.removeColorBox }>Remove a Color Box</button>
            <div id="box-holder">
              { colorBoxArray }
            </div>
          </main>
      </div>
    )
  }
}

export default App
