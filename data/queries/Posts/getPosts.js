const { GraphQLList } = require("graphql");
const PostType = require("../../types/PostType");
const Post = require("../../../models/Posts");

module.exports = {
  type: new GraphQLList(PostType),
  async resolve(parent, args) {
    const getPosts = await Post.findAll();
    if (getPosts) {
      return getPosts;
    } else
      return {
        statusText: "Cannot get posts."
      };
  }
};
