import React, { Component } from "react";
import { Howl } from "howler";
export default class PlayerBar extends Component {
  state = { isPlaying: false, isMuted: false };
  stations = {
    src:
      "https://prod-54-82-58-142.wostreaming.net/sbsystems-wskqfmaac-imc1?session-id=f8267be2ab9d9e9d13f394d0ec8e9984&c_yob=1994&c_gender=m&source=TuneIn",
    freq: "97.9",
    title: "La Mega"
  };

  sound = new Howl({
    src: this.stations.src,
    format: ["mp3", "acc"],
    html5: true,
    onplay: soundId => {
      this.setState({ isPlaying: true });
    },
    onstop: soundId => {
      this.setState({ isPlaying: false });
    },
    onmute: soundId => {
      this.setState({ isMuted: true });
    }
  });

  render() {
    return <div></div>;
  }
}
