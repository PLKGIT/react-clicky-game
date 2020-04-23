import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import images from "./images.json";


class App extends Component {

  state = {
    message: "Welcome to the 70s!",
    score: 0,
    topScore: 0,
    images
  }

  componentDidMount() {
    this.setState({ images: this.ShuffleImages(this.state.images) 
    });
  }

  HandleCardClicked = event => {
    console.log(`Card ${event} clicked!`)
  
  
  }

HandleRenderMessage() {
  // Render appropriate Message
  if (!this.state.error) {
    this.setState({ message: "Guessed correctly!" })
  } else {
    this.setState({ message: "Guessed incorrectly!" })
  }
}

HandleCompareScore = () => {
  // If score greater than top score, add one to top score
  // Shuffle cards
  this.state.topScore < this.state.score ? this.setState({ topScore: this.state.topScore + 1 }) :
    console.log('Top Score');
  console.log(this.state.topScore);
  this.HandleShuffle();
}

ResetClicked = images => {
  const resetClicked = images.map(item=>({...item,clicked:false}));
  return this.shuffleImages(resetClicked);
  };

ShuffleImages = images => {
  let i = images.length - 1;
  while (i > 0) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
    i--;
  };
  return images;
};


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
            HandleCardClicked={this.HandleCardClicked}
          />
        ))}
      </Container>

      <Footer />
    </div>
  );
}
}

export default App;