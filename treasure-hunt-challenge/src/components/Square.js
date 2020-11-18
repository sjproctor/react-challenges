import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    // handleClick is called when the square is clicked and passes the index (that came over from the spaces array in state as props) to the handleIconLocations method in the parent component
    this.props.handleLocations(this.props.index)
  }

  render(){
    return(
      <React.Fragment>
        {/* calls the handleClick method and displays the current value  of the spaces array (coming over as props) - starting with ? and updating to an icon when clicked */}
        <div id="square" onClick={ this.handleClick }>
          { this.props.value }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
