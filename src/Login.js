import React, { Component } from "react";

class Login extends Component {
  handleSubmit = () => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
