const { GraphQLInt } = require("graphql");
const PostType = require("../types/PostType");
const Post = require("../../models/Posts");

module.exports = {
  type: PostType,
  args: {
    id: { type: GraphQLInt }
  },
  async resolve(parent, args) {
    try {
      const deletePost = await Post.destroy({
        where: {
          id: args.id
        }
      });
      if (deletePost) {
        return {
          statusText: "Posts successfully deleted "
        };
      } else
        return {
          statusText: "Cannot delete Posts."
        };
    } catch (err) {
      return {
        statusText: "Server Error "
      };
    }
  }
};

/*

mutation($id:Int!) {
  deletePost(id:$id){
      statusText
  }
}

*/
