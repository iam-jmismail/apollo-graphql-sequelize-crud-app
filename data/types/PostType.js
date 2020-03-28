const { GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "PostType",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    post: { type: GraphQLString },
    statusText: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});
