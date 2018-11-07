import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ApollClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const myClient = new ApollClient({
  uri: "https://react-graphql-rookh.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={myClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("index")
);
