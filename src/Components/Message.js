import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome John",
    };
  }
  changeMessage() {
    if (this.state.message === "Welcome John") {
      this.setState({
        message: "Message has been changed",
      });
    } else {
      this.setState({
        message: "Welcome John",
      });
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change Message </button>
      </>
    );
  }
}

export default Message;
