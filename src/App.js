import React, { Component } from 'react';
import NavBar from "./Components/Navbar"

class App extends Component {
  state = {
    message: "Welcome to Clicky!",
    score: 0,
    topScore: 0

  }

  HandleRenderMessage(){
    this.setState({message: "No problem!"})
    // Render Message with Switch case
  }

  HandleCardClicked(){
    // Change the score
    // Increment by 1 for correct
    // Reset to 0 for incorrect

  }
  HandleCompareScore(){
    // Change out top score

  }

  render() {
    return (
      <div className="App">
          <NavBar 
            message = {this.state.message}
            score = {this.state.score}
            topScore = {this.state.topScore}
          />

      </div>
    );
  }
}

export default App;