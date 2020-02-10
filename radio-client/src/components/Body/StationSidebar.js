import React, { Component } from "react";
import Context from "../../Context/Context";

export default class StationSidebar extends Component {
  static contextType = Context;

  render() {
    return (
      <div style={styles.main}>
        <div style={styles.imgArea}>
          <img src={this.props.station.logo} style={styles.logo} />
        </div>

        <div style={styles.infoArea}>
          <p style={styles.infoP}>
            <b>{this.props.station.title}</b>
          </p>
          <p style={styles.infoP}>{this.props.station.freq}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    margin: "0 0 5vh 0",
    display: "grid",
    gridTemplateRows: "100%",
    gridTemplateColumns: "27% 73%",
    cursor: "pointer",
    backgroundImage: "linear-gradient(to right, #41B3A3, #85DCB0)",
    borderRadius: "5px"
  },
  imgArea: {
    gridArea: "1 / 1 / span 1 / span 1",
    border: "2px dotted black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  infoArea: {
    gridArea: "1 / 2 / span 1 / span 1",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.8em",
    justifyContent: "center",
    margin: "0 0 0 2vw"
  },
  logo: {
    height: "8vh",
    width: "5vw"
  },
  infoP: {
    margin: 0
  }
};
