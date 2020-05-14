# Starter Code for Treasure Hunt

### Initial Setup Already Done

I'm going to build out a bit more from where I left you all yesterday. I'm going to hit a couple points that I think will help you have a better understanding of your code.

As always, with these challenges, I'm showing you one way to solve the problem. This is not the "correct" way, it is just my way. I saw lots of really creative problem solving yesterday and I love it.

So this is the project where we left off yesterday.

I want to talk about 4 things:

1. I want to show you a little flexbox action for pretty quick baseline styling for making a gameboard out of all our square components.

2. Then, I want to cover how we get content from the child component back "up river" to App.js. I think everyone has already accomplished this in your code, but there is nothing wrong with seeing it one one time. This process is called passing functional props and it is a pretty heavy concept.

3. Then I want to talk about another React lifecycle method called componentDidMount(). We have already been using the constructor and the renders methods which are also React lifecycle methods. So we can add another one to the list that I think will be pretty handy for this project.

4. Then I want to talk about conditional rendering - or as my mentor affectionately called it, the poor man's if statement.


### Flexbox
Okay, so the first thing is that looking at the CSS the only styling so far is on each square. So in order to style the squares as a group, we have to create another div to wrap all the Squares and tell them where to live within the context of the entire page.
<div id="board">

- Inspect the page and look at the area the square is taking up and the area that board is taking up
- Add one at a time
#board{
  display: flex;  
  width: 320px;
  flex-wrap: wrap;
  margin: 0 auto;
}

There is plenty more you can do to make this styling better, but this will get you a gameboard.

### Functional Props
So right now we are mapping over the array in state and sending value to Square. I'm going to add index too. So I am going to create a method in Square that alerts the index when the box is clicked.

<div id="square" onClick={ this.handleClick }>

And just a reminder that Square should be a UI component. If you want to refactor to make this a functional component rather than a class, you are more than welcome to do that. To keep this flow very "react-y" Square doesn't need to hold state. App.js is managing the game logic. We want to keep the separation of concerns between logic and display.

- in Square
handleClick = () => {
  alert(this.props.index)
}

Now we know the location of every square. So the next thing is to get that info back "up the river" to App.js. To do that we need to make a method in App.js.

- in App
handleLocations = (index) => {
  alert(index)
}
So now that that we have the method in App, we can easily pass this to Square. Going down the river from parent to child is no problem. We can pass it as props.

So in Square, we can do a small refactor so that we are calling our method and passing this content back up.
- remove the alert and replace
handleClick = () => {
  this.props.handleLocations(this.props.index)
}

So at this point, Square is pretty much good to go for our MVP. We are passing the value and so as App.js updates the value in the array, Square as our display component will just render whatever we pass.

And the handleLocations method is called onClick and can now evaluate the logic of the win, the loss and the counter.

### componentDidMount
So this brings us to the initial set up. This method is going to handle the click events but we need to set the value of treasure and bomb. So we can use a React lifecycle method. So when a component comes into the world (aka when you refresh the page) first the constructor gets called, then the render. Then, just after those is componentDidMount. And you can call setState inside a componentDidMount and all of these actions will take place in that initial birth - or in React terms the component mounting. Which kinda makes me think of the App.js regally getting on a horse.

So anyway, we can wrap these initial "setup" actions in componentDidMount.
- Add to state:
treasureLocation: null

componentDidMount(){
  let treasure = Math.floor(Math.random() * this.state.squares.length)
  this.setState({ treasureLocation: treasure})
}

- pop a log in there so we can user test this bad boy
- note the warning in console

- refresh the page and watch the location change

I love the creative solutions that I saw to solve this problem before componentDidMount. And in my experience, you don't really appreciate the tool until you have tried to build something without it. It is not wasted time, it means you are fundamentally on the right track of thinking like a developer. You know how this flow should go, and you are crafting your own tools to get there. That is really admirable and it is notable step in your learning process.

So now if I pass a bit of logic here, I can see my app start to work.

- update the handleLocations
if(this.state.treasureLocation === index){
  alert("yo")
} else {
  alert(index)
}

### Keys
So before we get to our last point, let's address this warning in the console. "Each child should have a unique "key" property. It's not breaking the code but it is a super quick fix. So let's talk about it. This warning is coming from map.

React is particular about map. React is constantly re-rendering and as we know. And the power of React is that it only wants to re-render the DOM elements that have actually changed the UI. So when we map, React wants to be able to id each entity in that mapped array to know what should get re-rendered. It does this with keys. So if you have an array of unique items you can make the value of each item the key. In our case the values in our array are the same string of question marks, so we can pass the index as a unique key.

key={ index }

Boom, warning gone.

### Conditional Rendering
So that takes us to the last item, conditional rendering. This is a super handy bit of code that works from a fundamental concept that we learned on the second day of class.

<p>I am on the screen!</p>

Now let's say I only want this p-tag to show up when I click the treasure location. I can set up another value in the state object.

winning: false

- replace the winning alert with:
this.setState({ winning: true })

So I am using the setState method - which, because it is a method, takes an argument in parentheses and inside the argument I am passing an object. And the object is a set of key:value pairs. The key is the item in state that I want to update. And then I assign it the updated value. So really I'm just toggling this.state.winning from false to true.

So now that I have a boolean value that is determined by my user clicking the winning box, I can exploit that to set up conditional rendering.

{ this.state.winning && <p>I am on the screen!</p> }

So I am going to wrap my p-tag in curly braces so that I can escape the JSX and use JavaScript code. And here I am going to set up our old friend, the logical operator. So think of making an evaluation in an if statement. The double && requires that both sides of the expression are true in order for the entire expression to be true, right? So think about this p-tag as just a sting. In JavaScript type coercion land, a sting with content is a truthy value. So that side of the expression is true. Then the value of winning coming from state starts false - so the expression is false. Then we update state and winning becomes true making the entire expression true. So there you go, the poor man's if statement.

Alright, that is all I have for you. You have until lunch to work. After lunch we will do whiteboarding and then our second round of one on ones. Then you have the rest of the day.




# Treasure Hunt Challenge

## User Stories
- As a player, I can see a web page with a 3 by 3 grid board game with question marks in each square.
- As a player, when I click on one of the question marks the space turns into a tree icon.
- As a player, I can click on the question marks and behind one of the question marks is a treasure box icon.
- As a player, I can see a counter that shows how many guesses I have left.
- As a player, I am notified when the game is won or lost.
- As a player, I can click on a “Play Again” button to restart the game.

## Stretch Challenges
- As a player, I can click on the question marks and behind one of the question marks is a bomb icon.
- As a player, I cannot continue playing the game once I have won or lost.
- As a player, I can see a counter that decrements for every click.
- As a player, I can see a losing message if the counter reaches 0.
