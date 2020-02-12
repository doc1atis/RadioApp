import React, { Component } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Context from "../../Context/Context";
import StationSidebar from "./StationSidebar";
import StationInfo from "./StationInfo";
export default class Body extends Component {
  state = {
    stationID: 0
  };
  static contextType = Context;
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.leftArea}>
          <StationInfo />
        </div>
        <div style={styles.centerArea}>
          <div style={styles.centerAreaLeft}>
            <FaArrowAltCircleLeft size={48} />
          </div>
          <div style={styles.centerAreaMiddle}>
            <img
              src={this.context.stations[this.context.currentStation].logo}
              style={styles.stationLogo}
              alt="Radio station logo"
            />
          </div>
          <div style={styles.centerAreaRight}>
            <FaArrowAltCircleRight size={48} />
          </div>
        </div>
        <div style={styles.rightArea}>
          {this.context.stations.map((item, i) => {
            return <StationSidebar station={item} key={i} />;
          })}
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
  leftArea: {
    display: "flex",
    gridArea: "1 / 1 / span 1 / span 1"
  },
  centerArea: {
    display: "grid",
    gridTemplateColumns: "10% 80% 10%",
    gridTemplateRows: "100%",
    gridArea: "1 / 2 / span 1 / span 1"
  },
  centerAreaLeft: {
    display: "flex",
    gridArea: "1 / 1 / span 1 / span 1",
    alignItems: "center",
    justifyContent: "center"
  },
  centerAreaMiddle: {
    display: "flex",
    gridArea: "1 / 2 / span 1 / span 1",
    alignItems: "center",
    justifyContent: "center"
  },
  centerAreaRight: {
    display: "flex",
    gridArea: "1 / 3 / span 1 / span 1",
    alignItems: "center",
    justifyContent: "center"
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
  },
  rightArea: {
    display: "flex",
    flexDirection: "column",
    gridArea: "1 / 3 / span 1 / span 1",
    padding: "5% 10% 5% 10%",
    overflowY: "scroll"
  }
};
