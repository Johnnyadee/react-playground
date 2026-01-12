import React, { Component } from "react";

export class ClickClass extends Component {
  clickHandler() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Press here</button>
      </div>
    );
  }
}

export default ClickClass;
