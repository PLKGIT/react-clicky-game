import React, { Component } from 'react';
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import images from "./images.json";


class App extends Component {

  state = {
    message: "Welcome to 70s TV!",
    score: 0,
    topScore: 0,
    images
  }

  componentDidMount() {
    this.setState({
      images: this.ShuffleImages(this.state.images)
    });
  }

  HandleCorrectClick = userClicked => {
    const { score, topScore } = this.state;
    const scoreCount = score + 1;
    const topScoreCount = Math.max(scoreCount, topScore);

    this.setState({
      images: this.ShuffleImages(userClicked),
      score: scoreCount,
      topScore: topScoreCount,
      message: "Good guess!"
    });

  }

  HandleRepeatClick = userClicked => {
    this.setState({
      images: this.ResetClicked(userClicked),
      score: 0,
      message: "Sorry, you clicked that card already!"
    });
  }

  ResetClicked = images => {
    const resetClicked = images.map(item => ({ ...item, clicked: false }));
    return this.ShuffleImages(resetClicked);
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

  HandleCardClicked = userClicked => {
    console.log(`Card clicked!`)
    let correctGuess = false;
    const newImages = this.state.images.map(image => {
      const newImage = { ...image };

      if (newImage.id === userClicked) {
        if (!newImage.clicked) {
          newImage.clicked = true;
          correctGuess = true;
        }
      }
      return newImage;
    });
    correctGuess 
    ? this.HandleCorrectClick(newImages) 
    : this.HandleRepeatClick(newImages);
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
              clicked={images.clicked}
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