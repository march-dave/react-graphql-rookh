import React, { Component } from "react";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onHanldeChange = this.onHanldeChange.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
    alert("submit");
  };

  onHanldeChange(e) {
    [e.target.value] = e.target.value
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="email"
            onChange={this.onHanldeChange}
          />
          <input
            type="text"
            placeholder="password"
            onChange={this.onHanldeChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
