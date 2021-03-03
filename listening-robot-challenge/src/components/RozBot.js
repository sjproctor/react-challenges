import React, { Component } from 'react'

class RozBot extends Component {

  rozListening = (input) => {
    let watching = ["a", "l", "w", "a", "y", "s", " ", "w", "a", "t", "c", "h", "i", "n", "g", " ", "w", "o", "z", " "]
    return input.split("").map((value, index) => {
      return watching[index % watching.length]
    }).join("")
  }

  render() {
    return (
      <>
        <h3>Rozbot</h3>
        <h4>I'm... { this.rozListening(this.props.userInput) }</h4>
      </>
    )
  }
}
export default RozBot
