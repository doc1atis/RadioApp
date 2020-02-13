import React, { Component } from "react";

export default class NavBarButton extends Component {
  render() {
    return (
      <button
        id={this.props.buttonID}
        name={this.props.buttonName}
        style={this.props.buttonStyle}
        type={this.props.buttonType}
        onMouseDown={event => (event.target.style.boxShadow = "")}
        onMouseUp={event => (event.target.style.boxShadow = "4px 4px gray")}
        onFocus={event => (event.target.style.outline = "none")}
        onClick={this.props.clickFunction}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
