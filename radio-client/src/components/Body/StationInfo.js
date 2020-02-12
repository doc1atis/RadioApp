import React, { Component } from "react";
import Context from "../../Context/Context";

export default class StationInfo extends Component {
  static contextType = Context;
  render() {
    const { stations, currentStation } = this.context;
    return (
      <div style={styles.main}>
        <h5>
          Currently Playing: <i>{stations[currentStation].title}</i>
        </h5>
        <p>
          Frequency: <i>{stations[currentStation].freq}</i>
        </p>
        <p>
          City of License: <i>{stations[currentStation].city}</i>
        </p>
        <p>
          Format: <i>{stations[currentStation].format}</i>
        </p>
        <p>
          Owner: <i>{stations[currentStation].owner}</i>
        </p>
        <p>
          Area: <i>{stations[currentStation].area}</i>
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
    margin: "0 0 0 2vw",

    justifyContent: "center",
    padding: "0 0 0 2vw"
  }
};
