const { GraphQLList, GraphQLString } = require("graphql");
const PostType = require("../types/PostType");
const Post = require("../../models/Posts");

module.exports = {
  type: PostType,
  args: {
    title: { type: GraphQLString },
    post: { type: GraphQLString }
  },
  async resolve(parent, args) {
    const savePost = await Post.create({
      title: args.title,
      post: args.post
    });
    if (savePost) {
      return savePost;
    } else
      return {
        statusText: "Cannot add Posts."
      };
  }
};

/*

mutation($title:String,$post:String) {
  createPost(title:$title,post:$post){
    statusText
  }
}

*/
