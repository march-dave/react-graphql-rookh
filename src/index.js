import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";

const myClient = new ApolloClient({
  uri: "https://react-graphql-rookh.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={myClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("index")
);
