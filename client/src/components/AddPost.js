import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  Container
} from "react-bootstrap";
import { createPost } from "../queries/Posts";
import { graphql } from "react-apollo";

class AddPost extends Component {
  state = {
    title: "",
    post: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createPost({
      variables: {
        title: this.state.title,
        post: this.state.post
      }
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Container className='py-4'>
        <h2> Add Post </h2>
        <Form method='POST' onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Label> Title </Form.Label>
            <FormControl
              type='text'
              name='title'
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Form.Label> Post </Form.Label>
            <textarea
              className='form-control'
              rows='5'
              cols='10'
              name='post'
              onChange={this.handleChange}
            ></textarea>
          </FormGroup>
          <Button type='submit' variant='dark'>
            Add Post
          </Button>
        </Form>
      </Container>
    );
  }
}

export default graphql(createPost, { name: "createPost" })(AddPost);
