import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    // a state object that holds the user input and the phrase to be displayed as pig latin
    this.state = {
      phrase: "",
      phraseTranslated: "Your translated sentence here!"
    }
  }

  translate = (e) => {
    // prevents the browser from refreshing the page after the function runs
    // e is short for DOM event (a standard abbreviation)
    e.preventDefault()

    // words to be translated coming from setting state in the handleChange method
    let userInput = this.state.phrase
    console.log("userInput:", userInput)

    // create a new array to store the translated words
    let translatedWordsArray = []

    // split the words into an array and create uniform casing
    let splitUserInput = userInput.toLowerCase().split(" ")
    console.log("splitUserInput:", splitUserInput)

    splitUserInput.map(currentWord => {
    console.log("currentWord:", currentWord)

      // assigning the index of each vowel as a variable
      let a = currentWord.indexOf("a")
      let e = currentWord.indexOf("e")
      let i = currentWord.indexOf("i")
      let o = currentWord.indexOf("o")
      let u = currentWord.indexOf("u")

      // check for the instance of y, if the index of y is the first thing in the array then there are no others vowels present in the word
      // y variable has to be 'var' so it is available to the function scope outside the conditional statement
      if(currentWord.indexOf("y") !== 0){
        var y = currentWord.indexOf("y")
      } else {
        // if the index of y is not at the first index of the array, set it to -1 so it won't be a part of the vowels array
        y = -1
      }

      // store the vowel variables in array, each vowel variable has the index of the vowel in the current word
      let vowels = [a, e, i, o, u, y]

      // filter out the indexes of vowels that don't exist in the word, if the vowel doesn't exist it would return a -1, returns an array of indexes
      let existingVowels = vowels.filter(eachVowel => {
        return eachVowel >= 0
      })
      console.log("existingVowels:", existingVowels)

      // sorts the array of vowels to be in order so the first vowel will be in the first index of the vowels array
      let sortedVowels = existingVowels.sort()
      console.log("sortedVowels:", sortedVowels)

      // save the index of the first vowel as a variable
      let firstVowelLocation = sortedVowels[0]
      console.log("firstVowelLocation:", firstVowelLocation)

      // word manipulation logic:
      // if the location of the first vowel is at index 0, add 'way' and push the word into translatedWordsArray
      if(firstVowelLocation === 0){
        return translatedWordsArray.push(`${currentWord}way`)

      // if the first vowel is a u check if the letter before is a q
      } else if(currentWord.charAt(firstVowelLocation) === 'u' && currentWord.charAt(firstVowelLocation - 1) === "q"){
        // variable containing the word through the 'u'
        let beginningWord = currentWord.slice(0, firstVowelLocation+1)
        // variable containing the word after the 'u'
        let endWord = currentWord.substring(firstVowelLocation+1)
        console.log("beginningWord:", beginningWord)
        console.log("endWord:", endWord)
        // combine the segments of the word in the new order and add 'ay'
        return translatedWordsArray.push(`${endWord}${beginningWord}ay`)

      // for any other words slice from the beginning of the word up to the first vowel location
      } else {
        let beginningWord = currentWord.slice(0, firstVowelLocation)
        // variable containing the rest of the word from the first vowel to the end
        let endWord = currentWord.substring(firstVowelLocation)
        console.log("beginningWord:", beginningWord)
        console.log("endWord:", endWord)
        // combine the segments of the word in the new order and add 'ay'
        return translatedWordsArray.push(`${endWord}${beginningWord}ay`)
      }

    })

    // joining the array back to a string of words and updating the state of the translated phrase
    let translatedWords = translatedWordsArray.join(" ")
    this.setState({ phraseTranslated: translatedWords })
  }

  handleChange = (e) => {
    // method that takes the user input and updates state
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // need "value={ this.state.question }" in the input to clear the users text when resetting state
    this.setState({
      phrase: "",
      phraseTranslated: "Your translated sentence here!"
    })
  }

  render() {
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the translate method */}
              <button onClick={ this.translate }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by SARAH!
        </footer>
      </div>
    );
  }
}

export default App;
