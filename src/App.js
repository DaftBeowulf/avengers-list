import React, { Component } from "react";

import "./App.css";
import Avengers from "./Avengers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avengers: Avengers
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="http://pluspng.com/img-png/avengers-logo-png-avengers-logo-png-1376.png"
            className="App-logo"
            alt="logo"
          />
          <h1>Avengers: by Adam McKenney</h1>
          <ul className="avengers-list">
            {this.state.avengers.map(avenger => {
              return <li>{avenger["hero name"]}</li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
