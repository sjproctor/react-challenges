import React, { Component } from 'react';

class BadRobot extends Component{

  badListening = (userInput) => {
    // the userInput comes from this.props.userInput that comes from <userInput={ userInput }> passed as props from the App.js
    let badArray = userInput.split("").map((value, index) => {
      // splits userInput, maps over the array, replaces the values with "BLA"
      if (index%3 === 0) {
        return "B"
      } else if (index%3 === 1) {
        return "L"
      } else if (index%3 === 2) {
        return "A"
      }
    })
    // joins the array back to a string
    return badArray.join("")
  }

  render(){
    return(
      <div id="bad">
        <h3>Bad Robot</h3>
        {/* BadRobot takes <userInput={ userInput }> that is passed as props and passes the value as an argument to the badListening method */}
        <h4>I hear you saying { this.badListening(this.props.userInput) }. Is that correct?</h4>
      </div>
    )
  }
}

export default BadRobot
