import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      orange: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleOrangeChange = (event) => {
    this.setState({
      orange: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>User ID </label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Orange</label>
          <select value={this.state.orange} onChange={this.handleOrangeChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
