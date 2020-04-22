import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Message from "./components/Message";
import Score from "./components/Score";
import Total from "./components/Total";
import Header from "./components/Header";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import images from "./images.json";


class App extends Component {
  state = {
    message: "Welcome!",
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
          <Footer/>
      </div>
    );
  }
}

export default App;