import React from "react";
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import PlayerBar from "./components/PlayerBar/PlayerBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <PlayerBar />
    </div>
  );
}

export default App;
