import React, { Component } from "react";

export default class NavBarButton extends Component {
  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Geostar+Fill&display=swap"
          rel="stylesheet"
        ></link>
        <button
          id={this.props.buttonID}
          name={this.props.buttonName}
          style={styles.button}
          type={this.props.buttonType}
          onMouseDown={event => (event.target.style.boxShadow = "")}
          onMouseUp={event => (event.target.style.boxShadow = "4px 4px gray")}
          onFocus={event => (event.target.style.outline = "none")}
          onClick={this.props.clickFunction}
        >
          {this.props.buttonText}
        </button>
      </>
    );
  }
}

const styles = {
  button: {
    boxShadow: "4px 4px gray",
    margin: "0 5vw 0 0",
    width: "8vw",
    backgroundColor: "#41B3A3",
    height: "6vh",
    borderRadius: "4px",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "'Geostar Fill', script"
  }
};
