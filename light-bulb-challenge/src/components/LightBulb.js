import React, { Component } from 'react';

class LightBulb extends Component{
  constructor(){
    super()
    // state object with initial "off" values
    this.state = {
      light: "off",
      currentColor: "white"
    }
  }

  handleClick = () => {
    // destructure light and currentColor out of state
    const { light, currentColor } = this.state
    // setting state using terinary operators to alternate values
    this.setState({
      light: light === "off" ? "on" : "off",
      currentColor: currentColor === "white" ? "yellow" : "white"
    })
  }

  render(){
    return(
      <div>
        {/* a div containg the styling to create the light, an onClick method that switches between on and off, a style attribute that provides the backgroundColor of the box */}
        {/* React styling attributes are wrapped in double curly braces and the CSS-like keys are camelCased */}
        <div
          id="lightDiv"
          style={{ backgroundColor: this.state.currentColor }}
          onClick = { this.handleClick }
        >
          {/* renders the value of light - "on" or "off" */}
          { this.state.light }
        </div>
      </div>
    )
  }
}

export default LightBulb
