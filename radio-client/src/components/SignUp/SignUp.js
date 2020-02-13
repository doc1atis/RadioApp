import React, { Component } from "react";
import ReactModal from "react-modal";

export default class SignUp extends Component {
  render() {
    return (
      <div>
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
          <p>TEST</p>
        </ReactModal>
      </div>
    );
  }
}
