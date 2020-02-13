import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import allStations from "./Stations/Station";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Context from "./Context/Context";
import MainRouter from "./MainRouter";
import Spinner from "./components/Spinner/Spinner";

export default class App extends Component {
  state = {
    currentStation: 0
  };

  setCurrentStation = currentStation => {
    this.setState({ currentStation });
  };
  render() {
    return (
      <Context.Provider
        value={{
          currentStation: this.state.currentStation,
          stations: allStations
        }}
      >
        <div id="myApp" className="App">
          <Router>
            <React.Suspense fallback={<Spinner />}>
              <MainRouter />
            </React.Suspense>
          </Router>
        </div>
      </Context.Provider>
    );
  }
}
