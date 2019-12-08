import React, { Component } from 'react'
// import lightbulb components
import LightBulb from './components/LightBulb'
import LightBulbWithPic from './components/LightBulbWithPic'
import './App.css'

class App extends Component{
  constructor(){
    super()
    // App.js holds state only for the super stretch challenge of adding and removing light switched, App.js is not involved with any light switch logic
    this.state = {
      lightArray: [],
      switchArray: []
    }
  }

  addLightClick = () => {
    // destructures values out of state
    const { lightArray } = this.state
    // pushes a LightBulb component call into the array in state
    lightArray.push(<LightBulb />)
    // updates state with the new array
    this.setState({ lightArray: lightArray })
  }
  removeLightClick = () => {
    // destructures values out of state
    const { lightArray } = this.state
    // removes a LightBulb component call from the array in state
    lightArray.pop()
    // updates state with the new array
    this.setState({ lightArray: lightArray })
  }
  addSwitchClick = () => {
    // destructures values out of state
    const { switchArray } = this.state
    // pushes a LightBulbWithPic component call into the array in state
    switchArray.push(<LightBulbWithPic />)
    // updates state with the new array
    this.setState({ switchArray: switchArray })
  }
  removeSwitchClick = () => {
    // destructures values out of state
    const { switchArray } = this.state
    // removes a LightBulbWithPic component call from the array in state
    switchArray.pop()
    // updates state with the new array
    this.setState({ switchArray: switchArray })
  }

  render(){
    return(
      <div>
        <h1>Light Bulb Challenge</h1>
        <br />
          <main>
            <div id="main-box-div">
              <h3> Light Boxes </h3>
              <div className="button">
                {/* button that calls the addLightClick onClick */}
                <button onClick={ this.addLightClick }>
                    Add Light Box
                </button>
                {/* button that calls the removeLightClick onClick */}
                <button onClick={ this.removeLightClick }>
                  Remove Light Box
                </button>
              </div>
              <div id="parentLightDiv">
                {/* renders the content of the lightArray */}
                { this.state.lightArray }
              </div>
            </div>

            <div id="main-switch-div">
              <h3> Light Switches with Pictures</h3>
              <div className="button">
                {/* button that calls the addSwitchClick onClick */}
                <button onClick={ this.addSwitchClick }>
                  Add Light Switch
                </button>
                {/* button that calls the removeSwitchClick onClick */}
                <button onClick={ this.removeSwitchClick }>
                  Remove Light Switch
                </button>
              </div>
              <div id="parentLightWithPicDiv">
                {/* renders the content of the switchArray */}
                { this.state.switchArray }
              </div>
            </div>
          </main>
      </div>
    )
  }
}

export default App
