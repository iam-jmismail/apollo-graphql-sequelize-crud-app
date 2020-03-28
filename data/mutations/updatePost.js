const { GraphQLString, GraphQLInt } = require("graphql");
const PostType = require("../types/PostType");
const Post = require("../../models/Posts");

module.exports = {
  type: PostType,
  args: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    post: { type: GraphQLString }
  },
  async resolve(parent, args) {
    const updatePost = await Post.update(
      {
        title: args.title,
        post: args.post
      },
      {
        where: {
          id: args.id
        }
      }
    );
    if (updatePost) {
      return {
        statusText: "Post successfully Updated"
      };
    } else
      return {
        statusText: "Cannot Update Posts"
      };
  }
};

/*

mutation($id:Int,$title:String,$post:String) {
  updatePost(id:$id,title:$title,post:$post){
    statusText
  }
}

*/
