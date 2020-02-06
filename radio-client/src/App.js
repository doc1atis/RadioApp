import React from "react";
import NavBar from "./components/NavBar/NavBar";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';

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
