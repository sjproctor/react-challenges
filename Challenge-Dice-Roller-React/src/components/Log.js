import React, { Component } from 'react';

class Log extends Component{
  render(){
    // destructuring the values out of props
    let { diceLog } = this.props
    // mapping over each value in the props array and returning each value as its own paragraph
    let eachRoll = diceLog.map(value => {
      return <p>{ value }</p>
    })
    return(
      <div id="log-container">
        <h2>Previous Rolls</h2>
          <p>{ eachRoll }</p>
      </div>
    )
  }
}

export default Log
