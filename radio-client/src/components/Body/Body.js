import React, { Component } from "react";
import stations from "../../Stations/Station";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default class Body extends Component {
  state = {
    stationID: 0
  };

  stationUp = () => {
    let id = this.state.stationID;
    if (id < stations.length - 1) {
      this.setState({
        stationID: this.state.stationID + 1
      });
      this.props.setCurrentStation(this.state.stationID + 1);
    } else {
      this.setState({
        stationID: 0
      });
    }
  };

  stationDown = () => {
    let id = this.state.stationID;
    if (id === 0) {
      this.setState({
        stationID: stations.length - 1
      });
    } else {
      this.setState({
        stationID: this.state.stationID - 1
      });
    }
  };

  render() {
    const stationLogo = stations[this.state.stationID].logo;
    return (
      <div style={styles.main}>
        <div style={styles.centerArea}>
          <img
            src={stationLogo}
            style={styles.stationLogo}
            alt="Radio station logo"
          />
          <FaArrowAltCircleLeft
            size={48}
            onClick={this.stationDown}
            style={styles.arrowLeft}
          />
          <FaArrowAltCircleRight
            size={48}
            onClick={this.stationUp}
            style={styles.arrowRight}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    display: "grid",
    height: "71vh",
    width: "100vw",
    gridTemplateColumns: "25% 50% 25%",
    gridTemplateRows: "100%",
    backgroundImage: "linear-gradient(to right, lightgray, white)"
  },
  centerArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "1 / 2 / span 1 / span 1"
  },
  stationLogo: {
    height: "90%"
  },
  arrowLeft: {
    position: "absolute",
    top: "47%",
    left: "28%",
    cursor: "pointer"
  },
  arrowRight: {
    position: "absolute",
    top: "47%",
    left: "68%",
    cursor: "pointer"
  }
};
