import React, { Component } from "react";
import ReactModal from "react-modal";
import logo from "./appLogoFaded.jpg";
import NavBarButton from "../NavBarButton/NavBarButton";
import NavInput from "../NavBarInput/NavBarInput";
import NavBarInput from "../NavBarInput/NavBarInput";
import signUpApi from "../../API/signUpApi";

export default class SignUp extends Component {
  state = {
    error: false,
    errorMessage: [],
    success: false
  };

  signUp = async () => {
    if (document.querySelector(`#usernameSignup`).value === "") {
      this.state.errorMessage.push("User Name field cannot be empty");
    }
    if (document.querySelector(`#emailSignup`).value === "") {
      this.state.errorMessage.push("Email field cannot be empty");
    }
    if (document.querySelector(`#password1Signup`).value === "") {
      this.state.errorMessage.push("Password field cannot be empty");
    }
    if (
      document.querySelector(`#password1Signup`).value !==
      document.querySelector(`#password2Signup`).value
    ) {
      this.state.errorMessage.push("Passwords must match");
    }
    if (this.state.errorMessage.length > 0) {
      this.setState({
        error: true
      });
      document.querySelector(`#signup`).disabled = true;
      return;
    }

    const data = {
      username: document.querySelector(`#usernameSignup`).value,
      email: document.querySelector(`#emailSignup`).value,
      password: document.querySelector(`#password1Signup`).value
    };
    const newUser = await signUpApi(data);
    console.log(newUser);
    this.setState({
      success: true
    });
  };

  closeError = () => {
    this.setState({
      error: false,
      errorMessage: []
    });
    document.querySelector(`#signup`).disabled = false;
  };

  render() {
    return (
      <ReactModal
        isOpen={this.props.open}
        style={{
          overlay: {
            top: 25,
            left: 150,
            bottom: 25,
            right: 150,
            backgroundColor: "rgba(0,0,0,0.3)"
          }
        }}
      >
        <div style={styles.main}>
          <div style={styles.title}>
            <p>SIGN UP</p>
          </div>
          {/* Error message dv */}
          <div
            style={styles.error}
            hidden={this.state.error ? false : true}
            id="errorDiv"
          >
            {this.state.errorMessage.map(item => {
              return <p>{item}</p>;
            })}
            <button type="button" onClick={this.closeError}>
              Close
            </button>
          </div>
          {/* End */}
          {/* Success message div */}
          <div
            style={styles.success}
            hidden={this.state.success ? false : true}
          >
            <p>User created successfully! Please sign in...</p>
            <button type="button" onClick={this.props.closeModal}>
              Close
            </button>
          </div>
          <div style={styles.signupLeft}>
            <p style={styles.label}>Username:</p>
            <p style={styles.label}>E-mail:</p>
            <p style={styles.label}>Password:</p>
            <p style={styles.label}>Confirm Password:</p>
          </div>
          <div style={styles.signupRight}>
            <NavBarInput
              inputType="text"
              inputId="usernameSignup"
              inputName="usernameSignup"
              inputStyle={styles.input}
            />

            <NavBarInput
              inputType="text"
              inputId="emailSignup"
              inputName="emailSignup"
              inputStyle={styles.input}
            />

            <NavBarInput
              inputType="password"
              inputId="password1Signup"
              inputName="password1Signup"
              inputStyle={styles.input}
            />

            <NavBarInput
              inputType="password"
              inputId="password2Signup"
              inputName="password2Signup"
              inputStyle={styles.input}
            />
          </div>
          <div style={styles.closeSection}>
            <NavBarButton
              buttonType="button"
              buttonID="cancel"
              buttonName="cancel"
              clickFunction={this.props.closeModal}
              buttonText="Cancel"
            />

            <NavBarButton
              buttonType="button"
              buttonID="signup"
              buttonName="signup"
              buttonText="Sign Up"
              clickFunction={this.signUp}
            />
          </div>
        </div>
      </ReactModal>
    );
  }
}

const styles = {
  main: {
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "15% 70% 15%",
    gridTemplateColumns: "50% 50%",
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    fontFamily: "'Geostar Fill', script"
  },
  title: {
    gridArea: "1 / 1 / span 1 / span 2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5em",
    textDecoration: "underline"
  },
  signupLeft: {
    gridArea: "2 / 1 / span 1 / span 1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: "0 4vw 0 0"
  },
  signupRight: {
    gridArea: "2 / 2 / span 1 / span 1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: "0 0 0 4vw"
  },
  closeSection: {
    gridArea: "3 / 1 / span 1 / span 2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    boxShadow: "4px 4px gray",
    borderRadius: "4px",
    margin: "3vh 0 3vh 0",
    width: "20vw"
  },
  label: {
    margin: "3vh 0 3vh 0",
    fontSize: "1.2em",
    fontStyle: "italic"
  },
  error: {
    gridArea: "2 / 1 / span 1 / span 2",
    height: "35vh",
    width: "70%",
    backgroundColor: "pink",
    zIndex: "10",
    margin: "auto",
    border: "8px solid red",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  success: {
    gridArea: "2 / 1 / span 1 / span 2",
    height: "35vh",
    width: "70%",
    backgroundColor: "skyblue",
    zIndex: "10",
    margin: "auto",
    border: "8px solid blue",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
