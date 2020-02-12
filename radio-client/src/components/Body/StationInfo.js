import React, { Component } from "react";
import Context from "../../Context/Context";

export default class StationInfo extends Component {
  static contextType = Context;
  render() {
    const { stations, currentStation } = this.context;
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>
        <div style={styles.main}>
          <h5 style={styles.title}>
            Currently Playing:
            <br /> <i>{stations[currentStation].title}</i>
          </h5>
          <hr style={styles.line} />
          <p style={{ marginTop: "2vh" }}>
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
      </>
    );
  }
}

const styles = {
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Special Elite', cursive",
    margin: "0 0 0 3vw",
    justifyContent: "center",
    // textAlign: "justify",
    fontSize: "1.2em"
  },
  title: {
    fontWeight: "bold",
    // margin: "0 0 5vh 0",
    fontSize: "1.4em",
    margin: "0 0 2vh 0"
  },
  line: {
    height: "1px",
    border: "1px solid black",
    width: "100%",
    margin: "0 0 0 0"
  }
};
