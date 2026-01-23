import React, { Component } from "react";

class Eventbind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, this is the first message",
    };
    // this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage = () => {
    this.setState({
      message: "Hello, this is the second message",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p> 
        <button onClick={this.changeMessage}>Click Here</button>
      </div>
    );
  }
}

export default Eventbind;
