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
    this.state.colorBoxArray.push(<ColorBox />)
    this.setState({ colorBoxArray: this.state.colorBoxArray })
  }

  removeColorBox = () => {
    this.setState({ colorBoxArray: this.state.colorBoxArray.pop() })
  }

  render(){
    let boxArray = this.state.colorBoxArray.map(box => {
      return <div> { box } </div>
    })
    return(
      <div>
        <h1>Color Box Challenge</h1>
        <br />
          <main>
            <button onClick={ this.addColorBox }>Add a Color Box</button>
            <button onClick={ this.removeColorBox }>Remove a Color Box</button>
            <div>
              here: { boxArray }
            </div>
          </main>
      </div>
    )
  }
}

export default App
