import React, { Component } from 'react';

class Log extends Component {
  render() {
    return(
      <div className="log-container">
        <h2>Previous Rolls</h2>
        {/* mapping over each value in the props array (diceLog) and returning each value as its own tag */}
        {this.props.diceLog.map((value, index) => {
          return <h3 key={index}>{value}</h3>
        })}
      </div>
    )
  }
}

export default Log
