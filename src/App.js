import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import images from "./images.json";


class App extends Component {
  state = {
    message: "Welcome!",
    score: 0,
    topScore: 0,
    images: images
  }

  HandleRenderMessage() {
    this.setState({ message: "No problem!" })
    // Render Message with Switch case
  }

  HandleCardClicked() {
    // Change the score
    // Increment by 1 for correct
    // Reset to 0 for incorrect

  }
  HandleCompareScore() {
    // Change out top score

  }

  render() {
    return (
      <div className="App">
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />

        <Container>
          {this.state.images.map(images => (
            <Cards
              id={images.id}
              key={images.id}
              name={images.name}
              image={images.image}
            />
          ))}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;