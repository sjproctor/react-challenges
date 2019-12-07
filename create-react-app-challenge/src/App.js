// importing the component method from react
import React, { Component } from 'react';
// importing the CSS file
import './App.css';

class App extends Component{
  // The render method encapsulates the information being shown on the browser
  render(){
    // inside the return are JSX tags, the return will only display one tag so everything must be wrapped in a div or other parent tag
    return(
      <div>
      {/* calling all the components to be rendered in the browser by App */}
        <Header />
        <Content />
        <MoreContent />
        <Footer />
        <Title />
        <ContentList />
      </div>
    )
  }
}

class Header extends Component{
  render(){
    // inside the return are JSX tags, the return will only display one tag so everything must be wrapped in a div or other parent tag
    return(
      <h1>About US!</h1>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <ul>
        <li>I like chocolate and peanut butter ice cream.</li>
      </ul>
    )
  }
}

class MoreContent extends Component{
  render(){
    return(
      <ul>
        <li>My partner likes chips and salsa.</li>
      </ul>
    )
  }
}

class Footer extends Component{
  render(){
    return(
      <p>Team Sarik</p>
    )
  }
}

class Title extends Component{
  render(){
    return(
      <h1>My Top 5 Favorite Comfort Shows</h1>
    )
  }
}

class ContentList extends Component{
  render(){
    return(
      <ul>
        <li>Friends</li>
        <li>Parks and Rec</li>
        <li>Brooklyn 99</li>
        <li>The Office</li>
        <li>Scrubs</li>
      </ul>
    )
  }
}
export default App
