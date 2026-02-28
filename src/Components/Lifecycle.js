import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Henry",
    };
    console.log("LifeCycle Y constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle Y getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("LifeCycle Y render");
    return <div>This is the LifeCycle Y</div>;
  }
}

export default Lifecycle;
