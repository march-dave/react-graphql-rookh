import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    alert("submit");
    event.preventDefault();
  };

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
