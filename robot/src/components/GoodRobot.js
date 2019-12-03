import React, { Component } from 'react';

class GoodRobot extends Component{
  render(){
    return(
      <div id="good">
        <h3>Good Robot</h3>
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}

export default GoodRobot
