import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const startQ = gql`
  {
    getTodos {
      id
      task
      completed
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Query query={startQ}>
        {({ loading, error, data }) => {
          if (loading) return "loading";
          if (error) return "error";
          if (data) {
            return data.getTodos.map(c => c.task);
          }
        }}
      </Query>
    );
  }
}

export default App;
