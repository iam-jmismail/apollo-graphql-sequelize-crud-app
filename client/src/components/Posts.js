import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Apollo
import { graphql } from "react-apollo";
import { getAllPosts, deletePost } from "../queries/Posts";
import { flowRight as compose } from "lodash";

export class Posts extends Component {
  deletePost = id => {
    const rid = parseInt(id);
    this.props.deletePost({
      variables: {
        id: rid
      }
    });
  };

  render() {
    return (
      <Container className='py-4'>
        <h2> Posts </h2>
        <Link to='/post' className='btn btn-dark my-4'>
          Add Post
        </Link>

        {!this.props.data.loading &&
          this.props.data.getPosts.map(post => (
            <div key={post.id}>
              <Card className='mb-2'>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.post}</Card.Text>
                  <Button
                    onClick={() => {
                      this.deletePost(post.id);
                      this.props.history.push("/post");
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Container>
    );
  }
}

export default compose(
  graphql(getAllPosts),
  graphql(deletePost, { name: "deletePost" })
)(Posts);
