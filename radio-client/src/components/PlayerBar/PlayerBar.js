import React, { Component } from "react";
import { Howl } from "howler";
import "./PlayerBar.css";
import playButton from "./playButton.png";
import pauseButton from "./pauseButton.png";
import muteButton from "./muteButton.png";
import unmuteButton from "./unmuteButton.png";
import favoriteAdd from "./favoriteAdd.png";
// import favoriteRemove from "./favoriteRemove.png";
import previousButton from "./previousButton.png";
import nextButton from "./nextButton.png";
import Context from "../../Context/Context";

export default class PlayerBar extends Component {
  static contextType = Context;

  state = {
    isPlaying: false,
    isMuted: false
  };

  soundId = 1001;
  sound = new Howl({
    src: this.context.stations[this.context.currentStation].src,
    format: ["mp3", "acc"],
    html5: true,
    autoplay: false,
    onplay: soundId => {
      // fire when the sound start playing
      this.soundId = soundId;
      this.setState({ isPlaying: true });
    },
    onstop: soundId => {
      this.soundId = soundId;
      this.setState({ isPlaying: false });
    },
    onmute: soundId => {
      this.setState({ isMuted: !this.state.isMuted });
    }
  });

  playRadio = event => {
    if (!this.sound.playing(this.soundId)) {
      this.sound.play(this.soundId);
    }
  };

  stopRadio = event => {
    if (this.sound.playing(this.soundId)) {
      this.sound.stop(this.soundId);
    }
  };

  muteAndUnmuteRadio = () => {
    if (this.sound.playing(this.soundId)) {
      if (this.state.isMuted) {
        this.sound.mute(false, this.soundId);
      } else {
        this.sound.mute(true, this.soundId);
      }
    }
  };

  render() {
    console.log(this.context);
    return (
      <div style={styles.main}>
        <div style={styles.leftSection}>left</div>

        <div style={styles.centerSection}>
          <img
            src={previousButton}
            style={styles.buttonImg}
            alt="Change to previous station"
            onClick={this.context.previousStation}
          />
          {this.state.isPlaying ? (
            <>
              <img
                src={pauseButton}
                style={styles.buttonImg}
                onClick={this.stopRadio}
                alt="Play radio button"
              />
            </>
          ) : (
            <>
              <img
                src={playButton}
                style={styles.buttonImg}
                onClick={this.playRadio}
                alt="Play radio button"
              />
            </>
          )}
          <img
            src={nextButton}
            style={styles.buttonImg}
            alt="Change to previous station"
            onClick={this.context.nextStation}
          />
        </div>
        <div style={styles.rightSection}>
          {/* Mute button display */}
          {this.state.isMuted ? (
            <>
              <img
                src={unmuteButton}
                onClick={this.muteAndUnmuteRadio}
                style={styles.buttonImg}
                alt="Unmute radio button"
              />
            </>
          ) : (
            <>
              <img
                src={muteButton}
                onClick={this.muteAndUnmuteRadio}
                style={styles.buttonImg}
                alt="Mute radio button"
              />
            </>
          )}

          {/* Favorite Button Display */}
          <img
            src={favoriteAdd}
            style={styles.buttonImg}
            alt="Herat button that adds station to favorite list"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    display: "grid",
    height: "15vh",
    width: "100vw",
    gridTemplateRows: "100%",
    gridTemplateColumns: "25% 50% 25%",
    backgroundImage: "linear-gradient(to right, #41B3A3, #85DCB0)"
  },
  leftSection: {
    display: "flex",
    flexDirection: "column",
    gridArea: "1 / 1 / span 1 / span 1"
  },
  centerSection: {
    display: "flex",
    gridArea: "1 / 2 / span 1 / span 1",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold"
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gridArea: "1 / 3 / span 1 / span 1"
  },
  buttonImg: {
    height: "50%",
    cursor: "pointer",
    margin: "0 3vw 0 3vw"
  }
};
