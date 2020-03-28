// Imports
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema
} = require("graphql");
const _ = require("lodash");

// Queries

const getPosts = require("./queries/Posts/getPosts");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getPosts
  }
});

// Mutatons

const createPost = require("../data/mutations/createPosts");
const updatePost = require("../data/mutations/updatePost");
const deletePost = require("../data/mutations/deletePost");

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createPost,
    updatePost,
    deletePost
  }
});

// Schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});
