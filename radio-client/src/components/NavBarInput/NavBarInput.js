import React, { Component } from "react";

export default class NavBarInput extends Component {
  state = {
    inputValue: ""
  };
  onInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    return (
      <input
        type={this.props.inputType}
        id={this.props.inputId}
        name={this.props.inputName}
        placeholder={this.props.inputPlaceHolder}
        value={this.state.inputValue}
        onChange={this.onInputChange}
        style={this.props.inputStyle}
        onFocus={event => {
          event.target.style.outline = "5px ridge #A6ADF1";
          event.target.style.fontFamily = "'Times New Roman', Times, serif";
        }}
        onBlur={event => {
          event.target.style.outline = "none";
          event.target.style.fontFamily = "'Geostar Fill', script";
        }}
      />
    );
  }
}
