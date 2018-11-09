import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const startQ = gql`
  {
    getTodos {
      id
      task
      completed
    }
  }
`;

class BasicInfo extends Component {
  render() {
    return (
      <Query query={startQ}>
        {({ loading, data, error }) => {
          if (loading) return "loading";
          if (error) return "error";
          if (data) return data.getTodos.map(c => c.task);
        }}
      </Query>
    );
  }
}

export default BasicInfo;
