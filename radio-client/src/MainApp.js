import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import PlayerBar from "./components/PlayerBar/PlayerBar";

export default class MainApp extends Component {
  render() {
    return (
      <div>
        <NavBar setAuth={this.props.setAuth} />
        <Body />
        <PlayerBar setCurrentStation={this.props.setCurrentStation} />
      </div>
    );
  }
}
