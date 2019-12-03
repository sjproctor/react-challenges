import React, { Component } from 'react';

class BadRobot extends Component{

  badListening = (userInput) => {
    let badArray = userInput.split("").map((value, index) => {
      if (index%3 === 0) {
        return "B"
      } else if (index%3 === 1) {
        return "L"
      } else if (index%3 === 2) {
        return "A"
      }
    })
    return badArray.join("")
  }

  render(){
    return(
      <div id="bad">
        <h3>Bad Robot</h3>
        <h4>I hear you saying { this.badListening(this.props.userInput) }. Is that correct?</h4>
      </div>
    )
  }
}

export default BadRobot
