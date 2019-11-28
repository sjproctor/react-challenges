import React, { Component } from 'react';
import lightOff from '../images/lightOff.png'
import lightOn from '../images/lightOn.png'
import switchOff from '../images/switchOff.png'
import switchOn from '../images/switchOn.png'

class LightBulbWithPic extends Component{
constructor(){
  super()
  this.state = {
    lightPic: lightOff,
    lightSwitch: switchOff
  }
}

  handleClick = () => {
    // destructing variables out of state
    const { lightPic, lightSwitch } = this.state
    // setting state with a terinary for the light bulb picture and the light switch picture
    this.setState({ lightPic: lightPic === lightOff ? lightOn : lightOff })
    this.setState({ lightSwitch: lightSwitch === switchOff ? switchOn : switchOff })
  }

  render(){
    return(
      <div>
        <img
          id="lightDiv"
          src={ this.state.lightPic }
          alt="light bulb"
        />
        <br />
        <img
          id="switchDiv"
          src={ this.state.lightSwitch }
          alt="light switch"
          onClick={ this.handleClick }
        />
      </div>
    )
  }
}

export default LightBulbWithPic
