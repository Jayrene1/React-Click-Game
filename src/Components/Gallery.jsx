import React, { Component } from "react";
import Image from "./Image.jsx";
import images from "../images.json";

let clicked = [];

class Gallery extends Component {
  state = {
    images: images,
    clickLog: "Choose a macaron",
    score: 0,
    highScore: 0
  };

  imageClicked = id => {
    console.log("image clicked" + id);
    if (clicked.includes(id)) {
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
      this.setState({
          score: 0,
          clickLog: "You already chose that one!"
        });
      clicked = [];
    } else {
      clicked.push(id);
      let clone = this.state.images.sort(() => Math.random() - 0.5);
      this.setState({
        images: clone,
        score: this.state.score + 1,
        clickLog: "Correct guess!"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="grey lighten-3">
            <div className="container">
                <div id="info">
                    <div id="a">
                        <div id="scoreboard">
                            <h4 className="purple-text">Score: {this.state.score}</h4>
                            <h4 className="deep-purple-text">High Score: {this.state.highScore}</h4>
                        </div>
                    </div>
                    <p className="grey-text text-darken-1" id="b">Try to click all the macarons, but don't choose any twice</p>
                    <h4 className="grey-text text-darken-3" id="c">{this.state.clickLog}</h4>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="divider" />
            <div id="gallery">
                {this.state.images.map((image, index) => (
                    <Image key={index} image={image} imageClicked={this.imageClicked} />
                ))}
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
