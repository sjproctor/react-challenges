import React, { Component } from 'react';

class KanyeBot extends Component{

  kanyeListening = (userInput) => {
    // the userInput comes from this.props.userInput that comes from <userInput={ userInput }> passed as props from the App.js
    return userInput.split("").map(value => {
      // splits userInput, maps over the array, replaces the values with "Me!"
      return "Me! "
    })
  }

  render(){
    return(
      <div id="kanye">
        <h3>Kanye Bot</h3>
        {/* KanyeBot takes <userInput={ userInput }> that is passed as props and passes the value as an argument to the kanyeListening method */}
        <h4>Imma let you finish but { this.kanyeListening(this.props.userInput) }</h4>
      </div>
    )
  }
}

export default KanyeBot
