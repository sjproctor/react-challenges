import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'

class App extends Component{
  // App does not hold state and its only job is render the other components and CSS file in the browser
  render(){
    return(
      <div>
        <h1>Dice Challenge</h1>
        {/* Calls the Board component */}
        <Board />
      </div>
    )
  }
}

export default App
