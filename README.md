# Unit 2 and Unit 3: React Challenges

**Challenges for React at LEARN Academy, San Diego**
Each project has a README with individual user stories for the project.   
WIP: Always updating and evolving, striving to be better.

- [Intro to React Components](./react-intro-challenge)
- [Challenge: Magic8 Ball](./magic8-ball-challenge)
- [Challenge: Pig Latin](./pig-latin-challenge)
- [Create React App](./create-react-app-challenge)
- [Challenge: Colorbox](./color-box-challenge)
- [Challenge: Lightbulb](./light-bulb-challenge)
- [Challenge: Dice Roller](./dice-roller-challenge)
- [Challenge: Listening Robot](./listening-robot-challenge)
- [Challenge: Madlibs](./madlibs-challenge)
- [Starter Code: Treasure Hunt Setup](./treasure-hunt-setup)
- [Challenge: Treasure Hunt](./treasure-hunt-challenge)
- [Challenge: Tic Tac Toe](./tic-tac-toe-challenge)


## React Set Up
- `$ yarn create react-app <app-name>`
- cd into the project
- Using the command to create a react app generates a boiler plate app and file structure
- Delete boiler plate code in App.js to start project
- To start the server and display the application in the browser run the command `$ yarn start`

## Basic React Info
- index.html is rendered in the browser
- In the <body> of index.html is a div with the id="root"
- index.js calls the App.js component and targets the root div in index.html
`ReactDOM.render(<App />, document.getElementById('root'));`
- App.js renders any other component calls and App.css
