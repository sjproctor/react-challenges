import React, { Component } from 'react';
import LightBulb from './components/LightBulb'
import LightBulbWithPic from './components/LightBulbWithPic'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      lightArray: [],
      switchArray: []
    }
  }

  addLightClick = () => {
    const { lightArray } = this.state
    lightArray.push(<LightBulb />)
    this.setState({lightArray: lightArray})
  }
  removeLightClick = () => {
    const { lightArray } = this.state
    lightArray.pop()
    this.setState({lightArray: lightArray})
  }
  addSwitchClick = () => {
    const { switchArray } = this.state
    switchArray.push(<LightBulbWithPic />)
    this.setState({switchArray: switchArray})
  }
  removeSwitchClick = () => {
    const { switchArray } = this.state
    switchArray.pop()
    this.setState({switchArray: switchArray})
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
                <button
                  onClick={this.addLightClick}
                  >
                    Add Light Box
                </button>
                <button
                  onClick={this.removeLightClick}
                >
                  Remove Light Box
                </button>
              </div>
              <div id="parentLightDiv">
                {this.state.lightArray}
              </div>
            </div>

            <div id="main-switch-div">
              <h3> Light Switches with Pictures</h3>
              <div className="button">
                <button
                  onClick={this.addSwitchClick}
                >
                  Add Light Switch
                </button>
                <button
                  onClick={this.removeSwitchClick}
                >
                  Remove Light Switch
                </button>
              </div>
              <div id="parentLightWithPicDiv">
                {this.state.switchArray}
              </div>
            </div>
          </main>
      </div>
    )
  }
}

export default App
