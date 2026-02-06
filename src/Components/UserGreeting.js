import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged:  false,
    };
  }
  render() {
    return this.state.isLogged ? (
      <div>Welcome user you are logged in</div>
    ) : (
      <div>Welcome user you are NOT logged in</div>
    );
  }
}

export default UserGreeting;
