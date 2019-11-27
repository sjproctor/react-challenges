import React, { Component } from 'react';

class ColorBox extends Component{
  constructor(){
    super()
    this.state = {
      colors: ["red", "orange", "yellow", "green", "blue", "purple", "pink"],
      currentColor: 0
    }
  }

  colorPicker = () => {
    //destructure color and currentColor out of state
    let { colors, currentColor } = this.state
    this.setState({currentColor: currentColor+1})
    //when the end of the array is reached, start over at index 0
    if(currentColor === colors.length - 1){
      this.setState({currentColor: 0})
    }
  }

  render(){
    const { colors, currentColor } = this.state
    return(
      <div>
        <h2>Color Box</h2>
        <div
          id="color-box"
          onClick={this.colorPicker}
          style={{backgroundColor: colors[currentColor]}}
        >
        </div>
      </div>
    )
  }
}

export default ColorBox
