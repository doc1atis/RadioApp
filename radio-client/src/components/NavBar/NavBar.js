import React, { Component } from "react";
import appLogo from "./appLogo.jpg";
import logoText from "./logoText.png";
export default class NavBar extends Component {
  mouseDown = event => {};
  mouseUp = event => {
    event.target.style.boxShadow = "4px 4px gray";
  };
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Geostar+Fill&display=swap"
          rel="stylesheet"
        ></link>
        <div style={styles.main}>
          <div style={styles.leftSection}>
            <img
              src={appLogo}
              style={styles.logoImg}
              alt="SINCAGRS Streaming app logo"
            />
            <img
              src={logoText}
              style={styles.logoImg}
              alt="Text that reads SINCGARS Streaming"
            />
          </div>
          <div style={styles.rightSection}>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              style={styles.input}
              onFocus={event => {
                event.target.style.outline = "5px ridge #A6ADF1";
                event.target.style.fontFamily =
                  "'Times New Roman', Times, serif";
              }}
              onBlur={event => {
                event.target.style.outline = "none";
                event.target.style.fontFamily = "'Geostar Fill', script";
              }}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={styles.input}
              onFocus={event => {
                event.target.style.outline = "5px ridge #A6ADF1";
              }}
              onBlur={event => (event.target.style.outline = "none")}
            />
            <button
              id="submitButton"
              type="button"
              style={styles.button}
              onMouseDown={event => (event.target.style.boxShadow = "")}
              onMouseUp={event =>
                (event.target.style.boxShadow = "4px 4px gray")
              }
              onFocus={event => (event.target.style.outline = "none")}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
const styles = {
  main: {
    height: "14vh",
    backgroundImage: "linear-gradient(to right, #41B3A3, #85DCB0)",
    display: "grid",
    gridTemplateColumns: "33% 67%",
    gridTemplateRows: "100%",
    fontFamily: "'Geostar Fill', script"
  },
  leftSection: {
    gridArea: "1 / 1 / span 1 / span 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logoImg: {
    height: "80%"
  },
  rightSection: {
    gridArea: "1 / 2 / span 1 / span 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  input: {
    boxShadow: "4px 4px gray",
    borderRadius: "4px",
    margin: "0 3vw 0 0",
    width: "15vw"
  },
  button: {
    boxShadow: "4px 4px gray",
    margin: "0 5vw 0 0",
    width: "8vw",
    backgroundColor: "#41B3A3",
    height: "6vh",
    borderRadius: "4px",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  buttonClicked: {
    // boxShadow: "4px 4px gray",
    margin: "0 5vw 0 0",
    width: "8vw",
    backgroundColor: "#41B3A3",
    height: "6vh",
    borderRadius: "4px",
    fontWeight: "bold",
    fontStyle: "italic"
  }
};
