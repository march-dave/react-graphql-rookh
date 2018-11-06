import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";

const myClient = new ApolloClient({
  url: "https://react-graphql-rookh.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={myClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("index")
);
