import React, { Component } from 'react'
import MadlibForm from './components/MadlibForm'
import './App.css'

class App extends Component{
  constructor(){
    super()
    // state holds a form object will all the madlib form names, the names are very important as the handleChange method will be accessing the names from the input fields
    this.state = {
      form: {
        adjective1: "",
        noun1: "",
        verb1: "",
        adjective2: "",
        verb2: "",
        noun2: "",
        adverb1: "",
        adjective3: "",
        noun3: "",
        adjective4: "",
        noun4: "",
        adjective5: ""
      },
      // showStory creates the ability to update display the story or not based on a method that will update state to true
      showStory: false,
    }
  }

  startOver = () => {
    // a method called onClick to hide the story from the page
    this.setState({ showStory: false })
  }
  handleFormUpdate = (formInput) => {
    // updates state with the user input coming from the MadlibForm component and changes the showStory to true so the story will appear on the page
    this.setState({ form: formInput, showStory: true })
  }

  render(){
    return(
      <div>
        <h1>Madlibs Challenge</h1>
        {/* calling the Madlib form component and passing information as props - 1) the form object from state and 2) the handleFormUpdate method that updates the form inputs in state */}
        <div id="body">
          <MadlibForm
            form={ this.state.form }
            onSubmit={ this.handleFormUpdate }
          />
          {/* creating a comparison statement where both pieces of code must be true for the full expression to be true, when showStory is equal to false the story will not render, when state is updated to true the story is displayed (the div with text is considered a "truthy value")*/}
          <div id="storyContainer">
            <h3>My Madlib</h3>
            { this.state.showStory &&
              <div id="story">
                <div>
                Life is infinitely <b>{ this.state.form.adjective1 }</b> than anything which the mind of <b>{ this.state.form.noun1 }</b> could invent. We would not dare to <b>{ this.state.form.verb1 }</b> the things which are really mere <b>{ this.state.form.adjective2 }</b> of existence. If we could <b>{ this.state.form.verb2 }</b> out of that window hand in <b>{ this.state.form.noun2 }</b>, hover over this great city, <b>{ this.state.form.adverb1 }</b> remove the roofs, and and peep in at the <b>{ this.state.form.adjective3 }</b> things which are going on, the strange coincidences, the <b>{ this.state.form.noun3 }</b>, the cross-purposes, the wonderful chains of events, working through generations, and leading to the most <b>{ this.state.form.adjective4 }</b> results, it would make all fiction with its <b>{ this.state.form.noun4 }</b> and foreseen conclusions most stale and <b>{ this.state.form.adjective5 }</b>.
                <br />
                <br />
                ― Arthur Conan Doyle, The Complete Adventures of Sherlock Holmes
                </div>
                {/* when the story is displayed there will also be a button that when clicked will update state to return the showStory to false and remove the story*/}
                <button onClick={ this.startOver }>Play Again!</button>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
