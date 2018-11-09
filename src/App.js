import React, { Component } from "react";
import Basic from "./Basic";
import BasicInfo from "./BasicInfo";

class App extends Component {
  render() {
    return (
      <div>
        <Basic />
        <BasicInfo />
      </div>
    );
  }
}

export default App;
