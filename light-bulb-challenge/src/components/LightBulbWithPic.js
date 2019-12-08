import React, { Component } from 'react';
// imports for the switch and light images (I stored the images in a folder called images for organization)
import lightOff from '../images/lightOff.png'
import lightOn from '../images/lightOn.png'
import switchOff from '../images/switchOff.png'
import switchOn from '../images/switchOn.png'

class LightBulbWithPic extends Component{
constructor(){
  super()
  // state object with initial "off" values
  this.state = {
    lightPic: lightOff,
    lightSwitch: switchOff
  }
}

  handleClick = () => {
    // destructing values out of state
    const { lightPic, lightSwitch } = this.state
    // setting state with a terinary for the light bulb picture and the light switch picture
    this.setState({
      lightPic: lightPic === lightOff ? lightOn : lightOff,
      lightSwitch: lightSwitch === switchOff ? switchOn : switchOff
    })
  }

  render(){
    return(
      <div>
        {/* image tag displaying the on or off light bulb */}
        <img
          id="lightDiv"
          alt="light bulb"
          src={ this.state.lightPic }
        />
        <br />
        {/* image tag displaying the on or off light switch */}
        {/* the switch has the onClick that will switch between on and off */}
        <img
          id="switchDiv"
          alt="light switch"
          src={ this.state.lightSwitch }
          onClick={ this.handleClick }
        />
      </div>
    )
  }
}

export default LightBulbWithPic
