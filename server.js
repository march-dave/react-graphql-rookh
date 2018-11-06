const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// Graphql Apollo Server 
const { ApolloServer, gql } = require('apollo-server-express');

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(cors(), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todos = [
  {id: 1, task: 'rook room', completed: false},
  {id: 2, task: 'queen room', completed: true},
  {id: 3, task: 'king room', completed: true},
  {id: 4, task: 'bishop room', completed: true}
]

const typeDefs = gql`
  type Todo {
    id: Int
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: Int): Todo
  }

  type Mutation {
    addTodo(task: String, completed: Boolean): Todo
  }
`;

const getById = id => {
  console.log(id);
  const fitleredTodo = todos.filter( c => c.id === id ? c : null )
  return fitleredTodo[0];
}

const resolvers = {
  Query: {
    getTodos: () => todos,
    getTodo: (_, {id}) => getById(id)
  },
  Mutation: {
    addTodo: (_, args) => {
      const todo = { task: args.task, completed: args.completed};
      todos.push(todo);
      return todo;
    } 
  }
};

const server = new ApolloServer({typeDefs, resolvers, introspection: true, playground: true});
server.applyMiddleware({app});


// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Express listening on port: ${server.graphqlPath} ${port}`);
});