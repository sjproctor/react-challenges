import React, { Component } from 'react';

class Madlibs extends Component{
  constructor(){
    super()
    this.state = {
      liquid: "",
      noun1: "",
      noun2: "",
      story: "Every morning I get a cup of { this.state.liquid } and settle in to class. Then the whole { this.state.noun1 } does { this.state.noun2 }."
    }
  }

  createMadlib = (event) => {
    // prevents the browser from refreshing the page after the function runs
    event.preventDefault()
  }
  
  handleChange = (event) => {
    this.setState({ liquid: event.target.value })
  }

  render(){
    return(
      <div>
        <h2>A Typical Day at LEARN Academy</h2>
        <form onSubmit={ this.createMadlib }>
          Liquid:<input id="liquid" onChange={ this.handleChange }/>
          <br />
          Noun:<input id="noun1" onChange={ this.handleChange }/>
          <br />
          Noun:<input id="noun2" onChange={ this.handleChange }/>
          <br />
          <input className="button" type="submit" value="Submit" />
        </form>
        <p></p>
      </div>
    )
  }
}

export default Madlibs
