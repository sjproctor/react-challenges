import React, { Component } from 'react';

class KanyeBot extends Component{
  render(){
    return(
      <div id="kanye">
        <h3>Kanye Bot</h3>
        <h4>Imma let you finish but Beyonce is { this.props.userInput }.</h4>
      </div>
    )
  }
}

export default KanyeBot
