import React, { Component } from 'react';

class KanyeBot extends Component{

  kanyeListening = (userInput) => {
    return userInput.split("").map(value => {
      return value = "Beyonce"
    })
  }

  render(){
    return(
      <div id="kanye">
        <h3>Kanye Bot</h3>
        <h4>Imma let you finish but { this.kanyeListening(this.props.userInput) }.</h4>
      </div>
    )
  }
}

export default KanyeBot
