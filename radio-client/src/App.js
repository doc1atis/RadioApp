import React from "react";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import allStations from "./Stations/Station";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Context from "./Context/Context";
class App extends React.Component {
  state = {
    currentStation: 0,
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
          <NavBar />
          <Body />

          <PlayerBar setCurrentStation={this.setCurrentStation} />

        </div>
      </Context.Provider>
    );
  }
}

export default App;
