import React, { Component } from "react";
import Context from "../../Context/Context";
import StationSidebar from "./StationSidebar";
import StationInfo from "./StationInfo";
export default class Body extends Component {
  static contextType = Context;
  state = {};
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.leftArea}>
          <StationInfo />
        </div>
        <div style={styles.middleArea}>
          <img
            src={this.context.stations[this.context.currentStation].logo}
            style={styles.logoImg}
            alt="Logo for current radio station"
          />
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
    height: "71vh",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "25% 50% 25%",
    gridTemplateRows: "100%",
    backgroundImage:
      "linear-gradient(to right, white 0%, 30%, darkkhaki 50%, 70%, white 100%)"
  },
  leftArea: {
    gridArea: "1 / 1 / span 1 / span 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  middleArea: {
    gridArea: "1 / 2 / span 1 / span 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logoImg: {
    height: "90%"
  },
  rightArea: {
    gridArea: "1 / 3 / span 1 / span 1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
