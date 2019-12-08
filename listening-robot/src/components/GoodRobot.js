import React, { Component } from 'react';

class GoodRobot extends Component{
  render(){
    return(
      <div id="good">
        <h3>Good Robot</h3>
        {/* GoodRobot takes <userInput={ userInput }> that is passed as props and displays the input */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}

export default GoodRobot
