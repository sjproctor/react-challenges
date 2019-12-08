import React, { Component } from 'react';

class Log extends Component{
  render(){
    // <diceLog={ diceLog }> is passed to this component as this.props.diceLog
    // destructuring the value out of props
    let { diceLog } = this.props
    // mapping over each value in the props array (diceLog) and returning each value as its own paragraph
    let eachRoll = diceLog.map(value => {
      return <p>{ value }</p>
    })
    return(
      <div id="log-container">
        <h2>Previous Rolls</h2>
        {/* renders the variable that holds the mapped values from the diceLog */}
          <p>{ eachRoll }</p>
      </div>
    )
  }
}

export default Log
