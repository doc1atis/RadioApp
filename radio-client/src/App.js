import React from "react";
// import PlayerBar from "./components/PlayerBar/PlayerBar";
import PlayerBarTry from "./components/PlayerBarTry/PlayerBarTry";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Context from "./Context/Context";
class App extends React.Component {
  state = {
    currentStation: 0
  };
  setCurrentStation = currentStation => {
    this.setState({ currentStation });
  };
  render() {
    return (
      <Context.Provider value={{ currentStation: this.state.currentStation }}>
        <div id="myApp" className="App">
          <NavBar />
          <Body setCurrentStation={this.setCurrentStation} />
          <PlayerBarTry />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
