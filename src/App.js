import React, { Component } from "react";
import "./App.css";
import Gallery from "./Components/Gallery.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App">
          <nav>
            <div className="nav-wrapper purple lighten-3">
              <a href="https://jayrene1.github.io/React-Click-Game/" className="brand-logo center">
                React Click Game
              </a>
            </div>
          </nav>
        </header>
        <main>
          <Gallery />
        </main>
        <div className="divider"></div>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              © Joshua Arcega, 2019
              <a className="purple-text text-darken-2 right" href="https://github.com/Jayrene1/React-Click-Game">
                Github
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
