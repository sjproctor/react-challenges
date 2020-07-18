import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.handleLocations(this.props.index)
  }

  render(){
    return(
      <div>
        <div id="square" onClick={ this.handleClick }> { this.props.value }</div>
      </div>
    )
  }
}

export default Square
