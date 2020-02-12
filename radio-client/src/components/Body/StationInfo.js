import React, { Component } from "react";
import Context from "../../Context/Context";
export default class StationInfo extends Component {
  static contextType = Context;
  render() {
    let station = this.context.stations[this.context.currentStation];
    return (
      <div style={styles.main}>
        <h5>
          Currently Playing: <i>{station.title}</i>
        </h5>
        <br />
        <p>
          Frequency: <i>{station.freq}</i>
        </p>
        <p>
          City of License: <i>{station.city}</i>
        </p>
        <p>
          Format: <i>{station.format}</i>
        </p>
        <p>
          Owner: <i>{station.owner}</i>
        </p>
        <p>
          Area: <i>{station.area}</i>
        </p>
      </div>
    );
  }
}
const styles = {
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "0 0 0 2vw"
  }
};
