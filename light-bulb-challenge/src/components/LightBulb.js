import React, { Component } from 'react';

class LightBulb extends Component{
  constructor(){
    super()
    this.state = {
      light: "off",
      currentColor: "white"
    }
  }

  handleClick = () => {
    const { light, currentColor } = this.state
    this.setState({ light: light === "off" ? "on" : "off" })
    this.setState({ currentColor: currentColor === "white" ? "yellow" : "white" })
  }

  render(){
    return(
      <div>
        <div
          id="lightDiv"
          style={{ backgroundColor: this.state.currentColor }}
          onClick = { this.handleClick }
        >
          { this.state.light }
        </div>
      </div>
    )
  }
}

export default LightBulb
