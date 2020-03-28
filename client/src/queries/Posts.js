import { gql } from "apollo-boost";

const getAllPosts = gql`
  query {
    getPosts {
      id
      title
      post
      createdAt
      updatedAt
    }
  }
`;
const deletePost = gql`
  mutation($id: Int) {
    deletePost(id: $id) {
      statusText
    }
  }
`;

const createPost = gql`
  mutation($title: String, $post: String) {
    createPost(title: $title, post: $post) {
      title
      post
    }
  }
`;

export { getAllPosts, createPost, deletePost };
