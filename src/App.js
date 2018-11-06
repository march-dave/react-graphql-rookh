import React, { Component } from "react";
import { ApolloClient } from "Apollo-boost";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const getTodos = gql`
  {
    getTodos {
      id
      task
      completed
    }
  }
`;

const myClient = new ApolloClient({
  url: "https://react-graphql-rookh.herokuapp.com/graphql"
});

class App extends Component {
  render() {
    return (
      <Query query={getTodos}>
        {({ loading, error, data }) => {
          if (loading) return "Good";
          if (error) return "Not Good";
          if (data) {
            console.log("sfjdldjl");
            return data.getTodos.map(c => c.task);
          }
        }}
      </Query>
    );
  }
}

export default App;
