import React, { Component } from "react";
import appLogo from "../NavBar/appLogo.jpg";
import ReactTypingEffect from "react-typing-effect";
// import "./index.css";
import { NavLink } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Bungee+Hairline&display=swap"
          rel="stylesheet"
        ></link>
        <div style={styles.main}>
          <div style={styles.contentSection}>
            <NavLink to="/player" active>
              <img
                src={appLogo}
                style={styles.logo}
                alt="SINCGARS Streaming radio app logo"
              />
            </NavLink>

            <div style={styles.scrollText}>
              <ReactTypingEffect
                text="Loading CRYPTO.....DONE!"
                typingDelay="500"
                eraseDelay="900000"
                cursor=" "
                speed="100"
              />
            </div>
            <div style={styles.scrollText}>
              <ReactTypingEffect
                text="Connecting to satellite.....DONE!"
                typingDelay="3500"
                eraseDelay="900000"
                cursor=" "
                speed="100"
              />
            </div>
            <div style={styles.scrollText}>
              <ReactTypingEffect
                text="Connection established - READY!"
                typingDelay="7500"
                eraseDelay="900000"
                cursor=" "
                speed="100"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    background: "radial-gradient(#85DCB0 0%, 65%, rgb(50,139,153))",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    cursor: "pointer"
  },
  contentSection: {
    height: "70vh",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  scrollText: {
    fontFamily: "'Bungee Hairline', cursive",
    fontColor: "black",
    fontWeight: "bold",
    margin: "2vh 0 0 0",
    fontSize: "1.2em"
  }
};
