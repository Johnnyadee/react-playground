import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
  }
  render() {
    return this.state.isLogged && <div>Welcome user you are logged in</div>;
  }
}

export default UserGreeting;
