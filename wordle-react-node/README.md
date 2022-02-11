# Wordle Helper web app

## Steps to create using Node express and React

We follow steps outlined here: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

### Set up the server
- create a node project by running `npm init -y`
- set up a server at port 3001 in `server/index.js`
- install express with `npm i express` and note that it has been added as a dependancy in `package.json`
- edit package.json to add an `npm start` script that goes and runs `server/index.js`

### Set up a request for the endpoint to connect to
- add handling of a GET request in `server/index.js` which returns a simple message back

### Create a React frontend
- install create-react-app globally with `npm install -g create-react-app`
- create client app with `npx create-react-app client`
- add a `proxy` to `client/package.json` to know where our server lives

### Make HTTP requests from React to Node
- open `client/app.js` and import React at the top
- implement an exported `Component` called `App`
    - implement a method `callBackendAPI` which performs a `HTTP GET localhost:3001/api` request and calls `setState` with the result
    - implement `componentDidMount()` which calls callBackendAPI when the App is loaded
    - implement `render()` which gets called after time state is updated
- export `App` so `client/src/index.js` can use it