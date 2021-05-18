import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "echo through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    let userInput = this.state.phrase.split(" ")
    let translatedWordsArray = userInput.map(currentWord => {
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)

      let firstVowel = vowelsArray[0]
      console.log("firstVowel:", firstVowel)

      let firstVowelLocation = currentWord.indexOf(firstVowel)
      console.log("firstVowelLocation:", firstVowelLocation)

      let qChecker = currentWord[firstVowelLocation - 1]
      console.log("q-checker:", qChecker)

      if(currentWord[0] === firstVowel){
        return `${currentWord}way`
      } else if(qChecker === "q" && firstVowel === "u"){
        let beginningWord = currentWord.substring(0, firstVowelLocation + 1)
        let endWord = currentWord.substring(firstVowelLocation + 1)
        return `${endWord}${beginningWord}ay`
      } else if(firstVowelLocation === -1){
        let y = currentWord.indexOf("y")
        let beginningWord = currentWord.substring(0, y)
        let endWord = currentWord.substring(y)
        return `${endWord}${beginningWord}ay`
      } else {
        let beginningWord = currentWord.substring(0, firstVowelLocation)
        let endWord = currentWord.substring(firstVowelLocation)
        return `${endWord}${beginningWord}ay`
      }
    })

    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }


  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "echo through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pig Latin Translator</h1>
        <img
          src={ butcherPig }
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <h3>{ this.state.phraseTranslated }</h3>
        <footer>Coded by SARAH! </footer>
      </React.Fragment>
    )
  }
}

export default App
