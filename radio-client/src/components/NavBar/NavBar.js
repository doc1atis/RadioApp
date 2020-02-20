import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appLogo from "./appLogo.jpg";
import logoText from "./logoText.png";
import NavBarInput from "../NavBarInput/NavBarInput";
import logUserIn from "../../API/logUserIn";
import NavBarButton from "../NavBarButton/NavBarButton";
import SignUp from "../SignUp/SignUp";
import "../../App.css";
import isAuthenticated from "../../API/isAuthenticated";
import Context from "../../Context/Context";
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
  static contextType = Context;
  state = {
    errorMessage: null,
    showSignUp: false,
    isAuth: isAuthenticated(null)
  };

  mouseDown = event => {};
  mouseUp = event => {
    event.target.style.boxShadow = "4px 4px gray";
  };
  onFormSubmit = async event => {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    // this causes the delay when logIn, because of the request
    const errorMessage = await logUserIn({
      username,
      password
    });
    if (errorMessage) {
      toast.configure({ autoClose: 2000, position: "top-center" });
      toast(errorMessage, { type: "error" });
      this.setState({ errorMessage });
    } else {
      toast.configure({ autoClose: 2000, position: "top-center" });
      toast("login successfully", { type: "success" });
      this.setState({
        isAuth: isAuthenticated(null)
      });

      this.props.setAuth();
    }
  };

  showModal = () => {
    this.setState({
      showSignUp: !this.state.showSignUp
    });
  };
  logUserOut = () => {
    // this function is faster because there is no request
    localStorage.removeItem("token");
    this.setState({ isAuth: isAuthenticated(null) });
    this.props.setAuth();
  };
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Geostar+Fill&display=swap"
          rel="stylesheet"
        />
        <div id="modals">
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
            {!this.state.isAuth ? (
              <>
                <NavBarInput
                  inputType="text"
                  inputId="username"
                  inputName="username"
                  inputPlaceHolder="Username"
                  errorMessage={this.state.errorMessage}
                  inputStyle={styles.input}
                  buttonMargin="0 5vw 0 0"
                />
                <NavBarInput
                  inputType="password"
                  inputId="password"
                  inputName="password"
                  inputPlaceHolder="Password"
                  errorMessage={this.state.errorMessage}
                  inputStyle={styles.input}
                  buttonMargin="0 5vw 0 0"
                />
                <NavBarButton
                  buttonType="submit"
                  buttonID="submitButton"
                  buttonName="submitButton"
                  buttonStyle={styles.button}
                  buttonText="LogIn"
                />
                <NavBarButton
                  buttonType="button"
                  buttonID="signUpButton"
                  buttonName="signUpButton"
                  buttonStyle={styles.button}
                  buttonText="Sign Up"
                  clickFunction={this.showModal}
                />
              </>
            ) : (
              <NavBarButton
                buttonType="button"
                buttonID="logOut"
                buttonName="logOutButton"
                buttonStyle={styles.button}
                buttonText="LogOut"
                clickFunction={this.logUserOut}
              />
            )}
          </form>
        </div>
      </>
    );
  }
}
