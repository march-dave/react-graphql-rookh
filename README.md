ock# react-graphql-rookh
A simple deployment ready webpack-react Graphql Server and Apollo Client application for heroku

## Instructions

1.  Clone this repo
2.  Run `npm install`
3.  Run `npm run dev`, **localhost:8080** will open up in your default browser

## Verify production code
1. Run `webpack -p`
2. Run `node server.js`, and visit **localhost:8080**, voila your code is ready for heroku now.


## heroku link
https://react-graphql-rookh.herokuapp.com/

## docker
build docker image
docker build -t dave/docker-react-sample .

run the docker image
docker run -it --name sample -p 3000:3000 dave/docker-react-sample:latest /bin/bash

go inside the container
docker exec -it sample /bin/bash