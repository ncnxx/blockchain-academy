/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React, { Component } from 'react';
import { Menu, Header, Button, Grid, Segment, Image, Container, Card, Icon, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' },
];

export default class extends React.Component {
  static async getInitialProps({ query, res }) {
    const post = posts.find((post) => post.slug === query.slug);

    if (!post && res) {
      res.statusCode = 404;
    }

    return { post };
  }

  render() {
    const { post } = this.props;

    if (!post) return <h1>Post not found</h1>;

    return <h1>{post.title}</h1>;
  }
}
