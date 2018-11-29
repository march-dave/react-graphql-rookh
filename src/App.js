import React, { Component } from "react";
import Basic from "./Basic";
import BasicInfo from "./BasicInfo";
import Login from "./Login";
class App extends Component {
  render() {
    return (
      <div>
        <Basic />
        {/* <BasicInfo /> */}
        <Login />
      </div>
    );
  }
}

export default App;
