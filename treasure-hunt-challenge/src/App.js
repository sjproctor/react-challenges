import React, { Component } from 'react'
// import Board component
import Board from './components/Board'
import './App.css';

class App extends Component{
  // App.js is only responsible for rendering the Board component to the browser
  render(){
    return(
      <div>
        <Board />
      </div>
    )
  }
}

export default App
