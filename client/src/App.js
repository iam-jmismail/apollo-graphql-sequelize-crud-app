import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path='/' component={Posts} />
          <Route exact path='/post' component={AddPost} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
