import React, { Component } from "react";
import ReactHowler from "react-howler";
import Context from "../../Context/Context";
import sations from "../../Stations/Station";
import stations from "../../Stations/Station";
export default class PlayerBarTry extends Component {
  static contextType = Context;
  state = {
    currentStation: this.context.currentStation,
    isplaying: false,
    isMuted: false
  };
  current = 0;
  moveUp = () => {
    if (this.current <= stations.length - 1 && this.state.isplaying) {
      console.log("move up runs olgy");
      this.current++;
      this.setState({
        currentStation: this.current,
        isplaying: true,
        isMuted: false
      });
    }
  };
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
    console.log(stations[this.state.currentStation].src);
    return (
      <div>
        <ReactHowler
          src={stations[this.state.currentStation].src}
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
