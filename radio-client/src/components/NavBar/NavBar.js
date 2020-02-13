import React, { Component } from "react";
import appLogo from "./appLogo.jpg";
import logoText from "./logoText.png";
import NavBarInput from "../NavBarInput/NavBarInput";
import logUserIn from "../../API/logUserIn";
import NavBarButton from "../NavBarButton/NavBarButton";
import SignUp from "../SignUp/SignUp";
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
export default class NavBar extends Component {
  state = { errorMessage: null, showSignUp: false };
  mouseDown = event => {};
  mouseUp = event => {
    event.target.style.boxShadow = "4px 4px gray";
  };
  onFormSubmit = async event => {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const errorMessage = logUserIn({ username, password });
    if (errorMessage) {
      this.setState({ errorMessage });
    }
  };

  showModal = () => {
    this.setState({
      showSignUp: !this.state.showSignUp
    });
  };
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Geostar+Fill&display=swap"
          rel="stylesheet"
        ></link>
        <div>
          <SignUp open={this.state.showSignUp} closeModal={this.showModal} />
        </div>
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
          <form onSubmit={this.onFormSubmit} style={styles.rightSection}>
            <NavBarInput
              inputType="text"
              inputId="username"
              inputName="username"
              inputPlaceHolder="Username"
              errorMessage={this.state.errorMessage}
              inputStyle={styles.input}
            />
            <NavBarInput
              inputType="password"
              inputId="password"
              inputName="password"
              inputPlaceHolder="Password"
              errorMessage={this.state.errorMessage}
              inputStyle={styles.input}
            />
            <NavBarButton
              buttonType="submit"
              buttonID="submitButton"
              buttonName="submitButton"
              buttonStyle={styles.button}
              buttonText="Submit"
            />
            <NavBarButton
              buttonType="button"
              buttonID="signUpButton"
              buttonName="signUpButton"
              buttonStyle={styles.button}
              buttonText="Sign Up"
              clickFunction={this.showModal}
            />
          </form>
        </div>
      </>
    );
  }
}
