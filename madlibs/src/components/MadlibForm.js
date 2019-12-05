import React, { Component } from 'react'

class MadlibForm extends Component{
  constructor(props){
    super(props)
    // the state of this object holds the form passed as props
    this.state = {
      form: props.form,
    }
  }
  handleChange = (e) => {
    // destructures form out of state
    const { form } = this.state
    // destructures each name of inputs out of the form object and assigns the value of the user input to each name
    form[e.target.name] = e.target.value
    // updates state of the form object as the user types (when DOM events occur, each key stroke is updated in state)
    this.setState({ form: form })
  }
  handleSubmit = () => {
    // gets the handleFormUpdate from App.js that was passed as props to the MadlibForm component and updates the form in state and handles the method the changes the showStory key to true
    this.props.onSubmit(this.state.form)
  }
  render(){
    return(
      <>
        <main id="inputs">
          {/* each input has a name that matches its name in the form object in state, a value that is calling its value through the state object key, and calling the handleChange method that logs each change in the form and updates state */}
          <div>
            Adjective:
            <input
              name="adjective1"
              value={ this.state.form.adjective1 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
            Noun:
            <input
              name="noun1"
              value={ this.state.form.noun1 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Verb:
            <input
              name="verb1"
              value={ this.state.form.verb1 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Plural adjective:
            <input
              name="adjective2"
              value={ this.state.form.adjective2 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Verb:
            <input
              name="verb2"
              value={ this.state.form.verb2 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Noun:
            <input
              name="noun2"
              value={ this.state.form.noun2 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Adverb:
            <input
              name="adverb1"
              value={ this.state.form.adverb1 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Adjective:
            <input
              name="adjective3"
              value={ this.state.form.adjective3 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Noun:
            <input
              name="noun3"
              value={ this.state.form.noun3 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Adjective:
            <input
              name="adjective4"
              value={ this.state.form.adjective4 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Noun:
            <input
              name="noun4"
              value={ this.state.form.noun4 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <div>
          Adjective:
            <input
              name="adjective5"
              value={ this.state.form.adjective5 }
              onChange={ this.handleChange }
            />
            <br />
          </div>
          <button
          onClick={ this.handleSubmit }
          id="submitButton"
          >
          Submit
          </button>
          {/* button that calls the handleSubmit function that is passed handleFormUpdate as onSubmit via props from App.js which displays the story (sets the state of showStory to true) and updates the form values in the parent state object*/}
          </main>
      </>
    )
  }
}

export default MadlibForm
