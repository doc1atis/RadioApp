import React from "react";
import PlayerBar from "./components/PlayerBar/PlayerBar";
// import PlayerBarTry from "./components/PlayerBarTry/PlayerBarTry";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Context from "./Context/Context";
import allStations from "./Stations/Station";
class App extends React.Component {
  state = {
    currentStation: 0,
    stations: allStations
  };

  setCurrentStation = currentStation => {
    this.setState({ currentStation });
  };

  nextStation = () => {
    const station = this.state.currentStation;
    if (station === this.state.stations.length - 1) {
      this.setState({
        currentStation: 0
      });
    } else {
      this.setState({
        currentStation: this.state.currentStation + 1
      });
    }
  };

  previousStation = () => {
    const station = this.state.currentStation;
    if (station === 0) {
      this.setState({
        currentStation: this.state.stations.length - 1
      });
    } else {
      this.setState({
        currentStation: this.state.currentStation - 1
      });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          currentStation: this.state.currentStation,
          stations: this.state.stations,
          nextStation: this.nextStation,
          previousStation: this.previousStation
        }}
      >
        <div id="myApp" className="App">
          <NavBar />
          <Body />
          <PlayerBar />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
