import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }
  render() {
    let message;
    if (this.state.isLogged) {
      message = "Welcome user you are logged in";
    } else {
      message = "Welcome Guest";
    }
    return <div> {message}</div>;
  }
}

export default UserGreeting;
