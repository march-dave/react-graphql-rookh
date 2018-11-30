import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ApollClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "./Reducers";

// const store = crateStore(reducers);

const myClient = new ApollClient({
  uri: "https://react-graphql-rookh.herokuapp.com/graphql"
});

ReactDOM.render(
  // <ApolloProvider client={myClient}>
    <App />
  // </ApolloProvider>
  ,
  document.getElementById("index")
);
