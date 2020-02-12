import React, { Component } from "react";
import ReactHowler from "react-howler";
import Context from "../../Context/Context";

export default class PlayerBarTry extends Component {
  static contextType = Context;

  state = {
    currentStation: this.context.currentStation,
    isplaying: false,
    isMuted: false
  };

  current = 0;

  playRadio = () => {
    this.setState({ isplaying: true });
  };
  stopRadio = () => {
    this.setState({ isplaying: false });
  };
  muteAndUnmuteRadio = () => {
    this.setState({ isMuted: !this.state.isMuted });
  };
  render() {
    const { stations, currentStation } = this.context;
    return (
      <div>
        <ReactHowler
          src={stations[currentStation].src}
          playing={this.state.isplaying}
          html5={true}
          mute={this.state.isMuted}
          format={["mp3", "acc"]}
        />
        <button onClick={this.playRadio}>play</button>
        <button onClick={this.stopRadio}>stop</button>
        <button onClick={this.moveUp}>move-up</button>
        <button onClick={this.muteAndUnmuteRadio}>mute</button>
      </div>
    );
  }
}
