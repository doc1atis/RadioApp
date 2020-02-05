import React, { Component } from "react";
import { Howl } from "howler";
import "./PlayerBar.css";
import stations from "../../Stations/Station";
export default class PlayerBar extends Component {
  state = { isPlaying: false, isMuted: false };
  sound = new Howl({
    src: stations[0].src,
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
  soundId = null;
  playRadio = () => {
    this.soundId = this.sound.play();
  };

  stopRadio = () => {
    this.sound.stop(this.soundId);
  };

  muteAndUnmuteRadio = () => {
    if (this.state.isMuted) {
      this.sound.mute(false, this.soundId);
    } else {
      this.sound.mute(true, this.soundId);
    }
  };
  render() {
    return (
      <div>
        <button className="bar-button" onClick={this.playRadio}>
          play
        </button>
        <button className="bar-button" onClick={this.stopRadio}>
          stop
        </button>
        <button className="bar-button" onClick={this.muteAndUnmuteRadio}>
          mute
        </button>
      </div>
    );
  }
}
