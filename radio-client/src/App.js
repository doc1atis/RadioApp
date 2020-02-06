import React from "react";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <PlayerBar />
    </div>
  );
}

export default App;
