const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Graphql Apollo Server
const { ApolloServer, gql } = require("apollo-server-express");

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(cors(), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todos = [
  { id: 1, task: "rook room", completed: false },
  { id: 2, task: "queen room", completed: true },
  { id: 3, task: "king room", completed: true },
  { id: 4, task: "bishop room", completed: true }
];

const users = [
  {email: "dave@abc.com", password: "123", hashed: ""}
]

const typeDefs = gql`
  type Todo {
    id: Int
    task: String
    completed: Boolean
  }

  type Users {
    email: String
    password: String
    hashed: String
  }

  type Query {
    getTodos: [Todo]
    getTodo(id: Int): Todo
  }

  type Mutation {
    addTodo(task: String, completed: Boolean): Todo,
    login(email: String, password: String): Users
  }
`;

const getById = id => {
  console.log(id);
  const fitleredTodo = todos.filter(c => (c.id === id ? c : null));
  return fitleredTodo[0];
};

const resolvers = {
  Query: {
    getTodos: () => todos,
    getTodo: (_, { id }) => getById(id)
  },
  Mutation: {
    addTodo: (_, args) => {
      const todo = { task: args.task, completed: args.completed };
      todos.push(todo);
      return todo;
    },

    login: async(_, args) => {
      
      let loginuser = {email: args.email, password: args.password};
      // let loginuser = bcrypt.hash(args.password, 12, (err, hash) => {
      //   return {email: args.email, password: hash}
      // })

      const dbuser = await {email: "dave@abc.com", password: "123"}

      const tokengen = jwt.sign(loginuser, 
        "JWT_SECRET"
      );

      users.push(tokengen);

      // const t = 
      // {
      //   email: "dave@abc.com",
      //   password: "123",
      //   hashed: tokengen
      // }

      loginuser.hashed = tokengen;

      return loginuser;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
server.applyMiddleware({ app });

const authData = {
  email: "dave@abc.com",
  password: "1234",
  nickname: "march-dave"
};

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log("serializeUser", user);
  done(null, user.email);
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser", id);
  done(null, authData);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pwd"
    },
    (username, password, done) => {
      console.log("LocalStrategy", username, password);
      if (username === authData.email) {
        console.log(1);
        if (password === authData.password) {
          console.log(2);
          return done(null, authData, {
            message: "Welcome."
          });
        } else {
          console.log(3);
          return done(null, false, {
            message: "Incorrect password."
          });
        }
      } else {
        console.log(4);
        return done(null, false, {
          message: "Incorrect username."
        });
      }
    }
  )
);

app.post(
  "/auth/login_process",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login"
    // failureFlash:true,
    // successFlash:true
  })
);

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Express listening on port: ${server.graphqlPath} ${port}`);
});
