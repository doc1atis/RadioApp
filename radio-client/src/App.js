import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import allStations from "./Stations/Station";
import Context from "./Context/Context";
import MainRouter from "./MainRouter";
import Spinner from "./components/Spinner/Spinner";
import isAuthenticated from "./API/isAuthenticated";
export default class App extends Component {
  state = {
    currentStation: 0,
    isAuthenticated: isAuthenticated(null)
  };

  setCurrentStation = currentStation => {
    this.setState({ currentStation });
  };
  setAuth = () => {
    this.setState({ isAuthenticated: isAuthenticated(null) });
  };
  render() {
    return (
      <Context.Provider
        value={{
          currentStation: this.state.currentStation,
          stations: allStations,
          isAuth: this.state.isAuthenticated
        }}
      >
        <div id="myApp" className="App">
          <Router>
            <React.Suspense fallback={<Spinner />}>
              <MainRouter
                setCurrentStation={this.setCurrentStation}
                setAuth={this.setAuth}
              />
            </React.Suspense>
          </Router>
        </div>
      </Context.Provider>
    );
  }
}
