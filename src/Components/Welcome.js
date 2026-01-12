import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name, username} = this.props;
    return <h1>Hello {name}, your username is {username}</h1>;
  }
}

export default Welcome;
