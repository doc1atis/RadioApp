/*eslint-disable*/
import React, { Component } from "react";
import ReactHowler from "react-howler";
import "./PlayerBar.css";
import playButton from "./playButton.png";
import pauseButton from "./pauseButton.png";
import muteButton from "./muteButton.png";
import previousButton from "./previousButton.png";
import nextButton from "./nextButton.png";
import unmuteButton from "./unmuteButton.png";
import favoriteAdd from "./favoriteAdd.png";
import favoriteRemove from "./favoriteRemove.png";
import Spinner from "../Spinner/Spinner";
import Context from "../../Context/Context";
import addToFavorites from "../../API/addToFavorites";
export default class PlayerBar extends Component {
  static contextType = Context;
  current = this.context.currentStation;
  state = {
    currentStation: this.current,
    isPlaying: false,
    isMuted: false,
    isLoading: false
  };
  nextStation = () => {
    this.current++;

    if (
      this.current <= this.context.stations.length - 1 &&
      this.state.isPlaying
    ) {
      this.props.setCurrentStation(this.current);

      this.setState({
        currentStation: this.current,
        isPlaying: true,
        isMuted: false,
        isLoading: true
      });
    } else if (
      this.current > this.context.stations.length - 1 &&
      this.state.isPlaying
    ) {
      this.current = 0;
      this.props.setCurrentStation(this.current);
      this.setState({
        currentStation: this.current,
        isPlaying: true,
        isMuted: false,
        isLoading: true
      });
    }
  };
  previousStation = () => {
    this.current--;
    if (this.current >= 0 && this.state.isPlaying) {
      this.props.setCurrentStation(this.current);
      this.setState({
        currentStation: this.current,
        isPlaying: true,
        isMuted: false,
        isLoading: true
      });
    } else if (this.current < 0 && this.state.isPlaying) {
      this.current = stations.length - 1;
      this.props.setCurrentStation(this.current);
      this.setState({
        currentStation: this.current,
        isPlaying: true,
        isMuted: false,
        isLoading: true
      });
    }
  };
  playRadio = () => {
    this.setState({ isPlaying: true, isLoading: true });
  };
  stopRadio = () => {
    this.setState({ isPlaying: false });
  };
  muteAndUnmuteRadio = () => {
    this.setState({ isMuted: !this.state.isMuted });
  };
  itPlays = () => {
    this.setState({ isLoading: false });
  };
  addStationToFavorites = () => {
    addToFavorites(this.context.stations[this.state.currentStation]);
  };
  render() {
    return (
      <div style={styles.main}>
        <ReactHowler
          src={this.context.stations[this.state.currentStation].src}
          playing={this.state.isPlaying}
          html5={true}
          mute={this.state.isMuted}
          format={["mp3", "acc"]}
          onPlay={this.itPlays}
        />
        <div style={styles.leftSection}>left</div>
        <div style={styles.centerSection}>
          <img
            src={previousButton}
            style={styles.buttonImg}
            alt="Change to previous station"
            onClick={this.previousStation}
          />
          {this.state.isPlaying ? (
            <>
              {this.state.isLoading ? (
                <Spinner />
              ) : (
                <img
                  src={pauseButton}
                  style={styles.buttonImg}
                  onClick={this.stopRadio}
                  alt="Play radio button"
                />
              )}
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
            onClick={this.nextStation}
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
            onClick={this.addStationToFavorites}
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
