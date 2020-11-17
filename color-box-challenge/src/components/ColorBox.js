import React, { Component } from 'react';

class ColorBox extends Component{
  constructor(props){
    super(props)
    // state object that holds an array of colors and a currentColor value
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink"],
      currentColor: 0
    }
  }

  handleColorSelector = () => {
    //destructure color and currentColor out of state
    let { colors, currentColor } = this.state
    // the currentColor value is increased my one to move through the array
    this.setState({ currentColor: currentColor + 1 })
    //when the end of the array is reached, start over at index 0
    if(currentColor === colors.length - 1){
      this.setState({ currentColor: 0 })
    }
  }

  render(){
    // destructures values out of state
    const { colors, currentColor } = this.state
    // a div containg the styling to create the colorbox, an onClick method that changes the color of the box, a style attribute that provides the backgroundColor of the box
    // React styling attributes are wrapped in double curly braces and the CSS-like keys are camelCased
    return(
      <div
        id="color-box"
        onClick={ this.handleColorSelector }
        style={{ backgroundColor: colors[currentColor] }}
      >
      </div>
    )
  }
}

export default ColorBox
