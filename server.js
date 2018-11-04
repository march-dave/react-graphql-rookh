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

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, ()=> {
  console.log(`Server running on the: ${port}`)
});